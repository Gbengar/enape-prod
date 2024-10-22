"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  const isOpen = productOpen || resourcesOpen;

  return (
    <div
      className={`w-full relative z-10 bg-gray-800 ${
        isOpen ? "rounded-t-3xl" : "rounded-3xl"
      } transition-all duration-300`}
    >
      <nav
        className={`w-full px-6 py-3 flex items-center justify-between ${
          isOpen ? "rounded-b-3xl" : ""
        }`}
      >
        <div className="flex items-center space-x-4">
          <button></button>
          <div className="relative">
            <button
              onClick={() => {
                setProductOpen(!productOpen);
                setResourcesOpen(false);
              }}
              className="flex items-center space-x-2 text-white"
            >
              <span>All Product</span>
              <ChevronDown size={16} />
            </button>
          </div>
          <Link
            href="/customers"
            className={`text-white ${
              isActive("/customers") ? "font-bold" : ""
            }`}
          >
            Customers
          </Link>
          <div className="relative">
            <button
              onClick={() => {
                setResourcesOpen(!resourcesOpen);
                setProductOpen(false);
              }}
              className="flex items-center space-x-2 text-white"
            >
              <span>Resources</span>
              <ChevronDown size={16} />
            </button>
          </div>
          <Link
            href="/pricing"
            className={`text-white ${isActive("/pricing") ? "font-bold" : ""}`}
          >
            Pricing
          </Link>
          <Link
            href="/careers"
            className={`text-white ${isActive("/careers") ? "font-bold" : ""}`}
          >
            Careers
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="text-white">
            Sign In
          </Link>
          <Link
            href="/try-free"
            className="bg-[#4ADE80] text-white px-4 py-2 rounded-full"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 shadow-lg p-6 z-10 rounded-b-3xl">
          {productOpen && (
            <div className="flex justify-between">
              <div className="space-y-4">
                <h3 className="text-gray-300 font-semibold">Product</h3>
                <Link
                  href="/interview-notes"
                  className="flex items-center space-x-2 text-white"
                >
                  <span className="text-blue-400">🔹</span>
                  <span>Interview Notes</span>
                </Link>
                <Link
                  href="/assistant"
                  className="flex items-center space-x-2 text-white"
                >
                  <span className="text-blue-400">🔹</span>
                  <span>Assistant</span>
                </Link>
                <Link
                  href="/intake-debrief-notes"
                  className="flex items-center space-x-2 text-white"
                >
                  <span className="text-blue-400">🔹</span>
                  <span>Intake & Debrief Notes</span>
                </Link>
                <Link
                  href="/reports"
                  className="flex items-center space-x-2 text-white"
                >
                  <span className="text-blue-400">🔹</span>
                  <span>Reports</span>
                </Link>
              </div>
              <div className="space-y-4">
                <h3 className="text-gray-300 font-semibold">Platform</h3>
                <Link
                  href="/privacy-security"
                  className="flex items-center space-x-2 text-white"
                >
                  <span className="text-blue-400">🔹</span>
                  <span>Privacy & Security</span>
                </Link>
                <Link
                  href="/integrations"
                  className="flex items-center space-x-2 text-white"
                >
                  <span className="text-blue-400">🔹</span>
                  <span>Integrations</span>
                </Link>
              </div>
            </div>
          )}
          {resourcesOpen && (
            <div className="flex justify-between">
              <div className="flex-1">
                <Link href="/ai-digest" className="block">
                  <h3 className="text-white font-semibold">
                    Recruiter's AI Digest Newsletter
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Get the best content on how AI is impacting recruiting,
                    delivered to your inbox every Friday
                  </p>
                </Link>
              </div>
              <div className="flex space-x-8">
                <Link
                  href="/all-resources"
                  className="flex items-center space-x-2 text-white"
                >
                  <span className="text-blue-400">📘</span>
                  <span>All Resources</span>
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center space-x-2 text-white"
                >
                  <span className="text-blue-400">📘</span>
                  <span>Metaview Blog</span>
                </Link>
                <Link
                  href="/events"
                  className="flex items-center space-x-2 text-white"
                >
                  <span className="text-blue-400">📘</span>
                  <span>Events</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
