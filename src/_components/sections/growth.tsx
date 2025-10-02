import React from "react";
import SectionHeader from "../headers/section-header";

export default function Growth() {
  return (
    <div className="py-20">
      <div className="flex justify-center items-center text-center">
        <SectionHeader
          headline={
            <p>
              Crafting Designs <br /> That Drive Growth
            </p>
          }
          description="Creative solutions, seamless collaboration, and impactful results."
        />
      </div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Growth</h2>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">80%</div>
              <div className="text-sm text-gray-600">Improved feedback</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">56%</div>
              <div className="text-sm text-gray-600">New projects</div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Success</span>
              <span className="text-sm font-semibold text-gray-900">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-lime-500 h-2 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Success as a Service
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We have been transforming SaaS products for over 5 years by
            designing unique interfaces & driving growth.
          </p>
        </div>

        {/* Conversion Focused Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">
            Conversion Focused
          </h2>

          <div className="flex flex-col items-center mb-8">
            <div className="text-6xl font-bold text-gray-900 mb-6">200%</div>
            <div className="relative w-32 h-32 mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-400 to-lime-600"></div>
              <div className="absolute inset-6 rounded-full bg-white"></div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Conversion-Focused Design
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Websites so stunning that it will increases your conversion rate by
            200%, decrease the bounce.
          </p>
        </div>

        {/* Market Analytics Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Market Analytics
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Stats will speak for itself
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">User Rating</span>
                <span className="text-sm font-semibold text-gray-900">
                  +80%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-lime-500 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Leads</span>
                <span className="text-sm font-semibold text-gray-900">
                  +150%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-lime-500 h-2 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Ahead of the Market
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Designs that makes you and your venture shine in the crowd of
            similar looking websites.
          </p>
        </div>
      </div>
    </div>
  );
}
