type TrustCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function TrustCard({ icon, title, description }: TrustCardProps) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-[#F7EBE5] p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="mb-3 text-[#C79A8B]">{icon}</div>
      <h3 className="mb-1 font-semibold text-[#916B61]">{title}</h3>
      <p className="text-sm text-[#916B61]/80">{description}</p>
    </div>
  );
}
