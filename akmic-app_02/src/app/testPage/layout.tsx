import DarkPage from "@components/DarkPage";
import LightPage from "@components/LightPage";

export default function TestPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <div className="columns-2">
        <DarkPage />
        <LightPage />
      </div>
    </div>)
}