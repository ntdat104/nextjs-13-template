import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Styling</h1>

      <ul>
        <li>This example shows different styling solutions.</li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://beta.nextjs.org/docs/styling/css-modules">
          Docs
        </ExternalLink>

        <ExternalLink href="https://github.com/ntdat104/nextjs-13-template/tree/main/app/styling">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}
