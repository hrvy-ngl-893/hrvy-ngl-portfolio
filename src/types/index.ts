import { ComponentType, SVGProps, ReactNode } from "react";

// ==========================================
// 1. SHARED & UTILITY TYPES
// ==========================================

/**
 * Lucide icon component contract (compatible with lucide-react)
 */
export type LucideIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Known tech icon identifiers (e.g., devicon or custom icon sets)
 */
export type TechIcon =
  | "swift"
  | "python"
  | "javascript"
  | "typescript"
  | "react"
  | "github"
  | "linux"
  | "postman"
  | "cplusplus"
  | "django"
  | "mysql"
  | "docker"
  | "ssh"
  | "nodejs"
  | "nextjs"
  | "figma"
  | "arduino"
  | "amazonwebservices"
  | (string & {}); // Fallback for flexible string names while maintaining autocomplete

/**
 * Skill classification tags used across cards
 */
export type SkillCategory =
  | "Art"
  | "Academics"
  | "Writing"
  | "Web Development"
  | "Embedded Systems"
  | "Photography"
  | "Speaking"
  | "Leadership"
  | "Interpersonal"
  | (string & {});

/**
 * Link metadata attached to project or experience items
 */
export type ProjectLink = {
  type: "View" | "GitHub" | "Demo" | "Paper" | string;
  url: string;
  of: string;
};

// ==========================================
// 2. CARD & PROJECT ITEM TYPES
// ==========================================

/**
 * Base metadata shared across all project/experience items
 */
export interface BaseCardItem {
  id: string;
  title: string;
  content: ReactNode;
  image: string;
  gradient1: string;
  gradient2: string;
  color?: string;
  skills?: SkillCategory[];
  tags?: string[];
  links?: ProjectLink[];
  /**
   * Either Lucide React components or string identifiers for tech icons
   */
  lucide?: LucideIconComponent[];
  icon?: TechIcon[];
}

/**
 * Specific variant for standard portfolio projects
 */
export interface ProjectItem extends BaseCardItem {
  date: number; // e.g., 2021, 2025
}

/**
 * Specific variant for work and leadership experience cards
 */
export interface ExperienceItem extends BaseCardItem {
  startDate: string; // ISO format "YYYY-MM-DD"
  endDate?: string;  // ISO format or omitted if current
}

// Categorized Project collections
export type ProjectCategory = "art" | "publication" | "web" | "mobile" | "embedded" | "hardware";

export type ProjectsData = Record<ProjectCategory, ProjectItem[]>;

// ==========================================
// 3. LAYOUT & NAVIGATION TYPES
// ==========================================

export type NavItem = {
  href: string;
  label: string;
};

export type Theme = "light" | "dark";

export interface ThemedProps {
  theme: Theme;
}

// ==========================================
// 4. HOME PAGE TILE TYPES
// ==========================================

export type TileSize = "small" | "medium" | "large";

export interface BaseTileProps {
  title: string;
  content: ReactNode;
  image: string;
  gradient1: string;
  gradient2: string;
  color?: string;
  lucide?: LucideIconComponent[];
  icon?: TechIcon[];
}

export interface MainTileProps extends BaseTileProps {
  size?: TileSize;
  className?: string;
}

// Props for specific home tile variations
export type MainSmallTileProps = BaseTileProps;
export type MainMediumTileProps = BaseTileProps;