import React from 'react'
import {
  ClipboardCheck, Globe, Trophy, ShieldCheck,
  Flame, Droplets, Waves, Recycle, Wrench,
  Hotel, Factory, Home, HeartPulse, Briefcase, Landmark,
  FileText, Search, FileCheck, HardHat, Rocket,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const heroStats: {
  Icon: LucideIcon
  value: string
  label: string
  color: string
  bg: string
  ring: string
}[] = [
  { Icon: ClipboardCheck, value: '120+', label: 'Projects Completed',   color: '#4A7C59', bg: '#EEF6F0', ring: 'rgba(74,124,89,0.14)'   },
  { Icon: Globe,          value: '18+',  label: 'Cities Served',        color: '#2A7BA0', bg: '#EBF5FA', ring: 'rgba(42,123,160,0.14)'  },
  { Icon: Trophy,         value: '10+',  label: 'Years Experience',      color: '#B87333', bg: '#FDF5EC', ring: 'rgba(184,115,51,0.14)'  },
  { Icon: ShieldCheck,    value: '100%', label: 'End-to-End Execution', color: '#6B4FA0', bg: '#F2EEFC', ring: 'rgba(107,79,160,0.14)'  },
]

export const servicesOverviewData: {
  name: string
  desc: string
  color: string
  bg: string
  ring: string
  icon: React.ReactNode
}[] = [
  {
    name: 'Plumbing', desc: 'Supply, Drainage\n& Sanitary Solutions', color: '#4A7C59', bg: '#EEF6F0', ring: 'rgba(74,124,89,0.12)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h4v6H3z" /><path d="M17 9h4v6h-4z" /><path d="M7 12h10" />
        <path d="M12 7V3" /><path d="M12 21v-4" />
        <circle cx="12" cy="7" r="1.5" /><circle cx="12" cy="17" r="1.5" />
      </svg>
    ),
  },
  { name: 'Fire Fighting',    desc: 'Hydrant, Sprinkler\n& Alarm Systems',      color: '#B94040', bg: '#FDF0F0', ring: 'rgba(185,64,64,0.12)',   icon: <Flame    strokeWidth={1.7} /> },
  { name: 'Water Treatment',  desc: 'WTP, RO, Softener\n& DM Plants',           color: '#2A7BA0', bg: '#EBF5FA', ring: 'rgba(42,123,160,0.12)',  icon: <Droplets strokeWidth={1.7} /> },
  { name: 'Waste Water',      desc: 'STP, ETP, MBR, MBBR\n& Grey Water',       color: '#3D7A5F', bg: '#EEF7F2', ring: 'rgba(61,122,95,0.12)',   icon: <Recycle  strokeWidth={1.7} /> },
  { name: 'AMC / O&M',        desc: 'Inspections, Repairs\n& Maintenance',      color: '#5A6270', bg: '#F2F4F6', ring: 'rgba(90,98,112,0.12)',   icon: <Wrench   strokeWidth={1.7} /> },
  { name: 'Water Features',   desc: 'Pool, Lake Revival\n& RWH Solutions',      color: '#0E7490', bg: '#E8F5F9', ring: 'rgba(14,116,144,0.12)',  icon: <Waves    strokeWidth={1.7} /> },
]

export const industryData: { label: string; icon: React.ReactNode }[] = [
  { label: 'Hospitality',    icon: <Hotel      strokeWidth={1.5} /> },
  { label: 'Industrial',     icon: <Factory    strokeWidth={1.5} /> },
  { label: 'Residential',    icon: <Home       strokeWidth={1.5} /> },
  { label: 'Healthcare',     icon: <HeartPulse strokeWidth={1.5} /> },
  { label: 'Commercial',     icon: <Briefcase  strokeWidth={1.5} /> },
  { label: 'Infrastructure', icon: <Landmark   strokeWidth={1.5} /> },
]

export const aboutPoints = [
  'Turnkey project delivery, concept to commissioning',
  'ISO-compliant system design and installation',
  'In-house engineering, procurement, and execution',
  'Post-commission AMC and operational support',
  'Operations across 18+ cities, Pan India reach',
]

export const projectsData = [
  { num: '01', tag: 'Water Treatment', title: 'Advanced WTP for a 500-bed Hospital in Vadodara',                  loc: 'Gujarat', year: '2024', img: '/project-hospital-wtp.png'   },
  { num: '02', tag: 'Plumbing',        title: 'Complete Plumbing Infrastructure for Luxury Residential Tower',    loc: 'Gujarat', year: '2024', img: '/project-plumbing-tower.png' },
  { num: '03', tag: 'Fire Fighting',   title: 'Advanced Fire Hydrant & Sprinkler System for Campus',             loc: 'Gujarat', year: '2024', img: '/project-fire-fighting.png'  },
  { num: '04', tag: 'O&M / AMC',       title: 'AMC for STP at IT Park, Ahmedabad',                               loc: 'Gujarat', year: '2024', img: '/project-amc-stp.png'        },
]

export const productsOverview = [
  { name: 'Filters',           sub: 'Vessel, Bag, Disc, Pool Filters', img: '/product-filters.png'          },
  { name: 'Instruments',       sub: 'Flow meters, pH, TDS etc.',       img: '/product-instruments.png'      },
  { name: 'Spares & Chemicals',sub: 'RO membranes, Bio culture',       img: '/product-spares-chemicals.png' },
  { name: 'Equipment',         sub: 'Pumps, DAF, UV, Ozone',           img: '/product-equipment.png'        },
]

export const processSteps: { num: string; title: string; desc: string; Icon: LucideIcon }[] = [
  { num: '01', title: 'Scope & Contract', desc: 'Understanding requirements, site assessment, and formalising the project agreement.', Icon: FileText  },
  { num: '02', title: 'Site Inspection',  desc: 'Detailed drawings, P&ID, and engineering design finalisation.',                       Icon: Search    },
  { num: '03', title: 'Signoff',          desc: 'GA, GFC, and P&ID approval before procurement and fabrication begins.',               Icon: FileCheck },
  { num: '04', title: 'Execution',        desc: 'Erection, installation, civil work, and skilled labour deployment.',                  Icon: HardHat   },
  { num: '05', title: 'Commission',       desc: 'System testing, performance validation, and final handover to client.',               Icon: Rocket    },
]

export const serviceKeys = [
  'Plumbing', 'Fire Fighting', 'Water Treatment', 'Waste Water',
  'AMC / O&M', 'Water Features', 'Pump Systems', 'FRP Products',
]
