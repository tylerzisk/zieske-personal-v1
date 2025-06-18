import Aside from "@/components/Aside";
import EmploymentItem from "@/components/EmploymentItem";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_2fr] px-7.5">
      <Aside />

      <main className="py-5">
        <Summary />

        <div>
          <EmploymentItem
            company="Dev Technology Group"
            description="Worked on a government contract for Homeland Security to update
              and upgrade their I-9 verification systems utilizing AWS Lambda in
              an event-driven backend that is leveraged using a React micro
              frontend. Helped teach the team how to utilize React Testing
              Library and Mock Service Worker for testing micro frontends."
            duration="March 2025 - Present"
            title="Application Developer"
          />

          <EmploymentItem
            company="Deepwatch"
            description="Led team in sprint planning, grooming our feature backlog, prioritizing our next feature adds, and presenting sprint results to the wider team and leadership with collaboration with product and design. Mentored associate developers on the team and helped them understand better coding paradigms as well as building their confidence in the codebase. Migrated our code repos to GitHub from BitBucket and set up our CI/CD pipelines leveraging GitHub Actions. Developed GraphQL queries and mutations using AWS AppSync and Lambda, and integrated them into the frontend with ReactJS and Apollo Client. Migrated database schemas and ingestion sources with DBT Cloud, using ETL workflows to deliver features."
            duration="March 2023 - March 2025"
            title="Senior Software Developer"
          />

          <EmploymentItem
            company="GutCheck"
            description="Focused efforts to generate word clouds/network maps for PowerPoint presentations using Python Lambdas instead of microservices. Maintained and developed new features for microservices in Java, JS/TS, and C#, leveraging AWS Lambda and ECR/ECS. Helped newer members of the team become acquainted with the codebase as well as offered a guiding hand. Helped implement SpringBoot microservices and guided the team on some best practices regarding the framework. Supported an older platform with bugs and feature-adds and migrated some of the codebase to microservices."
            duration="August 2019 - January 2023"
            title="Senior Software Developer"
          />

          <EmploymentItem
            company="Vertafore"
            description="Developed a React-powered website to utilize new microservices for a new customer platform. Developed and tested multiple RESTful APIs on a microservice architecture using Spring Boot utilizing Java 11 and PostgreSQL. Acted as scrum master for my development team helping deliver commitments, removing impediments, and acting as the point of contact for the team."
            duration="January 2018 - August 2019"
            title="Software Engineer I"
          />
        </div>
      </main>
    </div>
  );
}
