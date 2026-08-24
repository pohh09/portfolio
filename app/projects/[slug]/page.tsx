import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import GetHiredCaseStudy from "@/components/sections/GetHiredCaseStudy";
import Footer from "@/components/layout/Footer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug || p.caseStudy)
    .map((p) => ({
      slug: p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(
    (p) => (p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === slug
  );

  if (!project) return { title: "Project Case Study" };

  return {
    title: `${project.title} — Product Case Study | Pooja Daki`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find(
    (p) => (p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === slug
  );

  if (!project || !project.caseStudy) {
    notFound();
  }

  return (
    <>
      <GetHiredCaseStudy project={project as any} />
      <Footer />
    </>
  );
}
