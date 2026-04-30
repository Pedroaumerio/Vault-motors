export default function SystemProtocol() {
  const protocols = [
    {
      title: "Security & Access",
      subtitle: "Biometrics, 2FA, Authorized Devices",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Telemetry Alerts",
      subtitle: "Delivery updates, Maintenance protocols",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Financial Ledger",
      subtitle: "Wire transfers, Crypto wallets, invoices",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full mt-16 lg:mt-24 mb-12">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
        {/* Left Col: Header & Description */}
        <div className="w-full lg:w-1/3">
          <h2
            className="text-lg lg:text-xl font-bold text-white tracking-wide mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            System Protocol
          </h2>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">
            Manage your security credentials, notification preferences, and linked financial accounts. Securely govern your data.
          </p>
        </div>

        {/* Right Col: Menu List */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {protocols.map((item, index) => (
            <button
              key={index}
              className="group flex items-center justify-between py-6 border-b border-white/5 hover:border-[var(--accent-cyan)]/30 transition-colors duration-300 text-left cursor-pointer"
            >
              <div className="flex items-center gap-6">
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] group-hover:border-[var(--accent-cyan)]/30 group-hover:bg-[var(--accent-cyan)]/5 transition-all duration-300 shadow-[0_0_0_rgba(0,229,204,0)] group-hover:shadow-[0_0_15px_rgba(0,229,204,0.15)]">
                  {item.icon}
                </div>
                
                {/* Text */}
                <div>
                  <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300 mb-1 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-[var(--text-muted)] tracking-wider uppercase">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300 transform group-hover:translate-x-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}

          {/* Terminate Session Button */}
          <div className="flex justify-end mt-12">
            <button className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-widest hover:text-red-400 transition-colors duration-300 flex items-center gap-2 cursor-pointer border border-transparent hover:border-red-400/20 px-4 py-2 rounded">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Terminate Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
