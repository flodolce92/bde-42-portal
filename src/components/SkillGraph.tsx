'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';
import * as d3 from 'd3';

export interface SkillDataPoint {
  date: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  data: SkillDataPoint[];
}

interface SkillGraphProps {
  skills: SkillCategory[];
  width?: number;
  height?: number;
}

export default function SkillGraph({ skills, width = 600, height = 400 }: SkillGraphProps) {
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);

  // Funzione per renderizzare il grafico
  useEffect(() => {
    if (!svgRef.current || !skills.length) return;

    // Pulizia del grafico all'inizio
    d3.select(svgRef.current).selectAll('*').remove();

    // Configurazione del margine e delle dimensioni
    const margin = { top: 20, right: 100, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Creazione del contenitore SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Preparazione dei dati
    const allDates = skills.flatMap(skill => skill.data.map(d => new Date(d.date)));
    const minDate = d3.min(allDates) || new Date();
    const maxDate = d3.max(allDates) || new Date();
    
    // Scala dell'asse X (date)
    const xScale = d3.scaleTime()
      .domain([minDate, maxDate])
      .range([0, innerWidth]);

    // Scala dell'asse Y (livelli di skill)
    const yScale = d3.scaleLinear()
      .domain([0, 100]) // Assumiamo un range di skill da 0 a 100
      .range([innerHeight, 0]);

    // Genera linee per ogni skill
    const line = d3.line<SkillDataPoint>()
      .x(d => xScale(new Date(d.date)))
      .y(d => yScale(d.level))
      .curve(d3.curveMonotoneX); // Usa curve smooth per un effetto più fluido

    // Scala colori per le diverse skill
    const colorScale = d3.scaleOrdinal<string>()
      .domain(skills.map(s => s.name))
      .range(d3.schemeCategory10);

    // Crea l'asse X
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(
        d3.axisBottom(xScale)
          .tickFormat(d => d3.timeFormat('%b %Y')(d as Date))
      )
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-45)');

    // Crea l'asse Y
    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(yScale));

    // Aggiungi titolo all'asse Y
    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left + 15)
      .attr('x', -innerHeight / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Livello Skill');

    // Aggiungi titolo al grafico
    svg.append('text')
      .attr('x', innerWidth / 2)
      .attr('y', -margin.top / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text('Evoluzione delle Skill');

    // Disegna le linee per ogni skill
    skills.forEach((skill, index) => {
      svg.append('path')
        .datum(skill.data)
        .attr('fill', 'none')
        .attr('stroke', colorScale(skill.name))
        .attr('stroke-width', 2)
        .attr('d', line);

      // Aggiungi punti per ogni data point
      svg.selectAll(`.dot-${index}`)
        .data(skill.data)
        .enter()
        .append('circle')
        .attr('class', `dot-${index}`)
        .attr('cx', d => xScale(new Date(d.date)))
        .attr('cy', d => yScale(d.level))
        .attr('r', 5)
        .attr('fill', colorScale(skill.name))
        .attr('stroke', 'white')
        .attr('stroke-width', 1.5);
    });

    // Crea la legenda
    const legend = svg.append('g')
      .attr('transform', `translate(${innerWidth + 10}, 0)`)
      .attr('class', 'legend');

    skills.forEach((skill, i) => {
      const legendItem = legend.append('g')
        .attr('transform', `translate(0, ${i * 20})`);
      
      legendItem.append('rect')
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', colorScale(skill.name));
      
      legendItem.append('text')
        .attr('x', 20)
        .attr('y', 12.5)
        .text(skill.name)
        .style('font-size', '12px');
    });

  }, [skills, width, height, theme]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
      <svg ref={svgRef} width={width} height={height} />
    </div>
  );
}