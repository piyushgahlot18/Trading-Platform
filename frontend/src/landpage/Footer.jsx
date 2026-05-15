import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#050816] text-white pt-20 pb-10 ">

      <div className="container">

        {/* TOP SECTION */}
        <div className="row g-5">

          {/* BRAND */}
          <div className="col-lg-3 col-md-6">

            <img
              src="/images/logoimg.png"
              alt="logo"
              style={{ width: "150px" }}
              className="mb-3"
            />

            <p className="text-secondary">
              Tradoo is a next-generation trading platform designed for
              investors who want powerful tools, transparent pricing,
              and seamless investing experience.
            </p>

            <p className="text-secondary mt-3">
              Trusted by thousands of traders worldwide.
            </p>

          </div>


          {/* COMPANY */}
          <div className="col-lg-2 col-md-6">

            <h5 className="mb-3">Company</h5>

            <p className="text-secondary">About</p>
            <p className="text-secondary">Products</p>
            <p className="text-secondary">Pricing</p>
            <p className="text-secondary">Careers</p>
            <p className="text-secondary">Press & Media</p>

          </div>


          {/* PLATFORM */}
          <div className="col-lg-2 col-md-6">

            <h5 className="mb-3">Platform</h5>

            <p className="text-secondary">Trading Dashboard</p>
            <p className="text-secondary">Market Analytics</p>
            <p className="text-secondary">Portfolio Tracking</p>
            <p className="text-secondary">Investment Insights</p>
            <p className="text-secondary">Mobile Trading</p>

          </div>


          {/* SUPPORT */}
          <div className="col-lg-2 col-md-6">

            <h5 className="mb-3">Support</h5>

            <p className="text-secondary">Help Center</p>
            <p className="text-secondary">Customer Support</p>
            <p className="text-secondary">Community Forum</p>
            <p className="text-secondary">System Status</p>
            <p className="text-secondary">Documentation</p>

          </div>


          {/* RESOURCES */}
          <div className="col-lg-2 col-md-6">

            <h5 className="mb-3">Resources</h5>

            <p className="text-secondary">Trading Guides</p>
            <p className="text-secondary">Market News</p>
            <p className="text-secondary">Investor Education</p>
            <p className="text-secondary">Webinars</p>
            <p className="text-secondary">API Access</p>

          </div>


          {/* ACCOUNT */}
          <div className="col-lg-1 col-md-6">

            <h5 className="mb-3">Account</h5>

            <p className="text-secondary">Open Account</p>
            <p className="text-secondary">Fund Transfer</p>
            <p className="text-secondary">Security</p>
            <p className="text-secondary">Settings</p>

          </div>

        </div>


        {/* DIVIDER */}
        <hr className="border-secondary mt-5" />


        {/* BOTTOM INFO */}
        <div className="text-center text-secondary">

          <p className="mb-1">
            © {new Date().getFullYear()} TradeX Trading Platform
          </p>

          <p>
            Designed for modern investors • Secure trading • Real-time
            analytics
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;