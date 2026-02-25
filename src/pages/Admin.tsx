import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

type HeroContent = {
  title: string;
  subtitle: string;
  tagline: string;
  ctaText: string;
  heroImageUrl: string;
};

type BusinessInfo = {
  name: string;
  addressLines: string[];
  cityStatePin: string;
  phoneDisplay: string;
  phoneTelHref: string;
  primaryEmail: string;
  secondaryEmail?: string;
  whatsappNumber: string;
  websiteUrl: string;
  googleMapsUrl: string;
};

type DownloadablesContent = {
  sectionBadge: string;
  sectionTitle: string;
  sectionHighlight: string;
  sectionDescription: string;
  brochureTitle: string;
  brochureDescription: string;
  brochureUrl: string;
  imageUrl: string;
  buttonLabel: string;
};

type GalleryItem = {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  tag?: string;
};

type GalleryContent = {
  items: GalleryItem[];
};

type AdminSection = "hero" | "business" | "downloadables" | "gallery";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("adminToken"));
  const [hero, setHero] = useState<HeroContent>({
    title: "",
    subtitle: "",
    tagline: "",
    ctaText: "",
    heroImageUrl: "/images/mainImage.png",
  });
  const [business, setBusiness] = useState<BusinessInfo>({
    name: "Asli Prep Foundation",
    addressLines: [
      "Plot No. 47, Rd No: 4A,",
      "Golden Tulip Estates, Kondapur,",
    ],
    cityStatePin: "Hyderabad, Telangana - 500 084",
    phoneDisplay: "+91 9346832477",
    phoneTelHref: "tel:+919346832477",
    primaryEmail: "info@asliprep.com",
    secondaryEmail: "asliprep@gmail.com",
    whatsappNumber: "919346832477",
    websiteUrl: "https://www.asliprep.com",
    googleMapsUrl:
      "https://maps.google.com/?q=Plot+No.+47,+Rd+No:+4A,+Golden+Tulip+Estates,+Kondapur,+Hyderabad,+Telangana+500084",
  });
  const [downloadables, setDownloadables] = useState<DownloadablesContent>({
    sectionBadge: "DOWNLOADABLE RESOURCES",
    sectionTitle: "Download Our",
    sectionHighlight: "Brochure",
    sectionDescription:
      "Get detailed information about our courses, curriculum, and programs. Free sample study materials, downloadable guides, success stories and case studies.",
    brochureTitle: "Program Brochure",
    brochureDescription: "Complete overview of our courses, curriculum, and programs.",
    brochureUrl: "/brochure.pdf",
    imageUrl: "/images/brocher.png",
    buttonLabel: "Download Brochure",
  });
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<AdminSection>("hero");

  useEffect(() => {
    if (!token) return;
    (async () => {
      try {
        // Hero
        const heroRes = await fetch(`${API_BASE}/api/content/hero`);
        if (heroRes.ok) {
          const json = await heroRes.json();
          if (json?.data) {
            setHero((prev) => ({ ...prev, ...(json.data as Partial<HeroContent>) }));
          }
        }
      } catch {
        // ignore
      }
      try {
        // Business info
        const bizRes = await fetch(`${API_BASE}/api/content/businessInfo`);
        if (bizRes.ok) {
          const json = await bizRes.json();
          if (json?.data) {
            setBusiness((prev) => ({ ...prev, ...(json.data as Partial<BusinessInfo>) }));
          }
        }
      } catch {
        // ignore
      }
      try {
        // Downloadables
        const dlRes = await fetch(`${API_BASE}/api/content/downloadables`);
        if (dlRes.ok) {
          const json = await dlRes.json();
          if (json?.data) {
            setDownloadables((prev) => ({ ...prev, ...(json.data as Partial<DownloadablesContent>) }));
          }
        }
      } catch {
        // ignore
      }
      try {
        // Gallery
        const galRes = await fetch(`${API_BASE}/api/content/gallery`);
        if (galRes.ok) {
          const json = await galRes.json();
          if (json?.data?.items) {
            setGalleryItems(json.data.items as GalleryItem[]);
          }
        }
      } catch {
        // ignore
      }
    })();
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch(`${API_BASE}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setStatus(json.error || "Login failed");
        return;
      }
      const json = await res.json();
      if (json.token) {
        localStorage.setItem("adminToken", json.token);
        setToken(json.token);
        setStatus("Logged in");
      }
    } catch (err) {
      console.error(err);
      setStatus("Login failed");
    }
  };

  const handleSaveHero = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setStatus("Please log in first");
      return;
    }
    setStatus("Saving...");
    try {
      const res = await fetch(`${API_BASE}/api/content/hero`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: hero }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setStatus(json.error || "Failed to save");
        return;
      }
      setStatus("Saved hero content");
    } catch (err) {
      console.error(err);
      setStatus("Failed to save");
    }
  };

  const handleSaveBusiness = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setStatus("Please log in first");
      return;
    }
    setStatus("Saving business info...");
    try {
      const res = await fetch(`${API_BASE}/api/content/businessInfo`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: business }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setStatus(json.error || "Failed to save business info");
        return;
      }
      setStatus("Saved business info");
    } catch (err) {
      console.error(err);
      setStatus("Failed to save business info");
    }
  };

  const handleSaveDownloadables = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setStatus("Please log in first");
      return;
    }
    setStatus("Saving downloadables...");
    try {
      const res = await fetch(`${API_BASE}/api/content/downloadables`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: downloadables }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setStatus(json.error || "Failed to save downloadables");
        return;
      }
      setStatus("Saved downloadables");
    } catch (err) {
      console.error(err);
      setStatus("Failed to save downloadables");
    }
  };

  const handleSaveGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setStatus("Please log in first");
      return;
    }
    setStatus("Saving gallery...");
    try {
      const res = await fetch(`${API_BASE}/api/content/gallery`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: { items: galleryItems } as GalleryContent }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setStatus(json.error || "Failed to save gallery");
        return;
      }
      setStatus("Saved gallery");
    } catch (err) {
      console.error(err);
      setStatus("Failed to save gallery");
    }
  };

  const addGalleryItem = () => {
    const id = Date.now().toString();
    setGalleryItems((prev) => [
      ...prev,
      { id, title: "", description: "", imageUrl: "", tag: "" },
    ]);
  };

  const updateGalleryItem = (id: string, patch: Partial<GalleryItem>) => {
    setGalleryItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };

  const removeGalleryItem = (id: string) => {
    setGalleryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          {token && (
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Log out
            </Button>
          )}
        </header>

        {!token ? (
          <section className="bg-white rounded-xl shadow-md border border-border p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-2">Admin Login</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Log in
              </Button>
            </form>
            {status && <p className="text-sm text-muted-foreground">{status}</p>}
          </section>
        ) : (
          <>
            <div className="flex gap-6">
              {/* Sidebar */}
              <aside className="w-52 shrink-0">
                <div className="bg-white rounded-xl border border-border shadow-sm p-3 space-y-1 text-sm">
                  <p className="text-xs font-semibold text-muted-foreground px-2 pb-1">
                    Sections
                  </p>
                  {[
                    { id: "hero", label: "Hero section" },
                    { id: "business", label: "Business info" },
                    { id: "downloadables", label: "Downloadables / Brochure" },
                    { id: "gallery", label: "Gallery" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveSection(item.id as AdminSection)}
                      className={`w-full text-left px-2 py-1.5 rounded-md transition-colors ${
                        activeSection === item.id
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-foreground/80 hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </aside>

              {/* Main content for selected section */}
              <main className="flex-1 space-y-6">
                {activeSection === "hero" && (
                  <section className="bg-white rounded-xl shadow-md border border-border p-6 space-y-4">
                    <h2 className="text-lg font-semibold mb-4">Hero Section</h2>
                    <form className="space-y-4" onSubmit={handleSaveHero}>
                      <div>
                        <label className="block text-sm font-medium mb-1">Main title</label>
                        <Input
                          value={hero.title}
                          onChange={(e) => setHero((prev) => ({ ...prev, title: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Subtitle (bold line)</label>
                        <Input
                          value={hero.subtitle}
                          onChange={(e) => setHero((prev) => ({ ...prev, subtitle: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Tagline paragraph</label>
                        <Textarea
                          rows={3}
                          value={hero.tagline}
                          onChange={(e) => setHero((prev) => ({ ...prev, tagline: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">CTA button text</label>
                        <Input
                          value={hero.ctaText}
                          onChange={(e) => setHero((prev) => ({ ...prev, ctaText: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Hero image URL</label>
                        <Input
                          value={hero.heroImageUrl}
                          onChange={(e) =>
                            setHero((prev) => ({ ...prev, heroImageUrl: e.target.value }))
                          }
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          For example: /images/mainImage.png or a full https:// URL
                        </p>
                      </div>
                      <Button type="submit">Save hero content</Button>
                    </form>
                  </section>
                )}

                {activeSection === "business" && (
                  <section className="bg-white rounded-xl shadow-md border border-border p-6 space-y-4">
                    <h2 className="text-lg font-semibold mb-4">
                      Business Info (Address, Phone, Email, WhatsApp)
                    </h2>
                    <form className="space-y-4" onSubmit={handleSaveBusiness}>
                      <div>
                        <label className="block text-sm font-medium mb-1">Business name</label>
                        <Input
                          value={business.name}
                          onChange={(e) => setBusiness((prev) => ({ ...prev, name: e.target.value }))}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Address line 1</label>
                          <Input
                            value={business.addressLines[0] || ""}
                            onChange={(e) =>
                              setBusiness((prev) => ({
                                ...prev,
                                addressLines: [e.target.value, prev.addressLines[1] || ""],
                              }))
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Address line 2</label>
                          <Input
                            value={business.addressLines[1] || ""}
                            onChange={(e) =>
                              setBusiness((prev) => ({
                                ...prev,
                                addressLines: [prev.addressLines[0] || "", e.target.value],
                              }))
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">City / State / PIN</label>
                        <Input
                          value={business.cityStatePin}
                          onChange={(e) =>
                            setBusiness((prev) => ({ ...prev, cityStatePin: e.target.value }))
                          }
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Phone display text</label>
                          <Input
                            value={business.phoneDisplay}
                            onChange={(e) =>
                              setBusiness((prev) => ({ ...prev, phoneDisplay: e.target.value }))
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Phone tel href (tel:+...)
                          </label>
                          <Input
                            value={business.phoneTelHref}
                            onChange={(e) =>
                              setBusiness((prev) => ({ ...prev, phoneTelHref: e.target.value }))
                            }
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Primary email</label>
                          <Input
                            value={business.primaryEmail}
                            onChange={(e) =>
                              setBusiness((prev) => ({ ...prev, primaryEmail: e.target.value }))
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Secondary email (optional)
                          </label>
                          <Input
                            value={business.secondaryEmail || ""}
                            onChange={(e) =>
                              setBusiness((prev) => ({ ...prev, secondaryEmail: e.target.value }))
                            }
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            WhatsApp number (no +, e.g. 919346832477)
                          </label>
                          <Input
                            value={business.whatsappNumber}
                            onChange={(e) =>
                              setBusiness((prev) => ({ ...prev, whatsappNumber: e.target.value }))
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Website URL</label>
                          <Input
                            value={business.websiteUrl}
                            onChange={(e) =>
                              setBusiness((prev) => ({ ...prev, websiteUrl: e.target.value }))
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Google Maps URL</label>
                        <Input
                          value={business.googleMapsUrl}
                          onChange={(e) =>
                            setBusiness((prev) => ({ ...prev, googleMapsUrl: e.target.value }))
                          }
                        />
                      </div>
                      <Button type="submit">Save business info</Button>
                    </form>
                  </section>
                )}

                {activeSection === "downloadables" && (
                  <section className="bg-white rounded-xl shadow-md border border-border p-6 space-y-4">
                    <h2 className="text-lg font-semibold mb-4">Downloadables (Brochure section)</h2>
                    <form className="space-y-4" onSubmit={handleSaveDownloadables}>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Section badge</label>
                          <Input
                            value={downloadables.sectionBadge}
                            onChange={(e) =>
                              setDownloadables((prev) => ({
                                ...prev,
                                sectionBadge: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Section title (before highlight)
                          </label>
                          <Input
                            value={downloadables.sectionTitle}
                            onChange={(e) =>
                              setDownloadables((prev) => ({
                                ...prev,
                                sectionTitle: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Section highlight word
                          </label>
                          <Input
                            value={downloadables.sectionHighlight}
                            onChange={(e) =>
                              setDownloadables((prev) => ({
                                ...prev,
                                sectionHighlight: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Section description</label>
                        <Textarea
                          rows={3}
                          value={downloadables.sectionDescription}
                          onChange={(e) =>
                            setDownloadables((prev) => ({
                              ...prev,
                              sectionDescription: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Brochure title</label>
                          <Input
                            value={downloadables.brochureTitle}
                            onChange={(e) =>
                              setDownloadables((prev) => ({
                                ...prev,
                                brochureTitle: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Button label</label>
                          <Input
                            value={downloadables.buttonLabel}
                            onChange={(e) =>
                              setDownloadables((prev) => ({
                                ...prev,
                                buttonLabel: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Brochure description</label>
                        <Textarea
                          rows={3}
                          value={downloadables.brochureDescription}
                          onChange={(e) =>
                            setDownloadables((prev) => ({
                              ...prev,
                              brochureDescription: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Brochure URL (PDF)</label>
                          <Input
                            value={downloadables.brochureUrl}
                            onChange={(e) =>
                              setDownloadables((prev) => ({
                                ...prev,
                                brochureUrl: e.target.value,
                              }))
                            }
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Example: /brochure.pdf or a full https:// URL
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Preview image URL</label>
                          <Input
                            value={downloadables.imageUrl}
                            onChange={(e) =>
                              setDownloadables((prev) => ({
                                ...prev,
                                imageUrl: e.target.value,
                              }))
                            }
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Example: /images/brocher.png
                          </p>
                        </div>
                      </div>
                      <Button type="submit">Save downloadables</Button>
                    </form>
                  </section>
                )}

                {activeSection === "gallery" && (
                  <section className="bg-white rounded-xl shadow-md border border-border p-6 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-lg font-semibold">Gallery</h2>
                      <Button size="sm" type="button" onClick={addGalleryItem}>
                        Add image
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Manage images shown on the Gallery page. Add the image URL (from your hosting or
                      /images/ folder), an optional tag (e.g. &quot;Classroom&quot;), title, and description.
                    </p>
                    <form className="space-y-4" onSubmit={handleSaveGallery}>
                      {galleryItems.length === 0 && (
                        <p className="text-sm text-muted-foreground">
                          No images yet. Click &quot;Add image&quot; to create one.
                        </p>
                      )}
                      <div className="space-y-4">
                        {galleryItems.map((item) => (
                          <div
                            key={item.id}
                            className="border border-border rounded-xl p-4 grid gap-3 md:grid-cols-[2fr,2fr,1fr,auto]"
                          >
                            <div>
                              <label className="block text-xs font-medium mb-1">Image URL</label>
                              <Input
                                value={item.imageUrl}
                                onChange={(e) =>
                                  updateGalleryItem(item.id, { imageUrl: e.target.value })
                                }
                                placeholder="/images/your-image.png or https://..."
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium mb-1">Title</label>
                              <Input
                                value={item.title}
                                onChange={(e) =>
                                  updateGalleryItem(item.id, { title: e.target.value })
                                }
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium mb-1">
                                Tag (optional)
                              </label>
                              <Input
                                value={item.tag || ""}
                                onChange={(e) =>
                                  updateGalleryItem(item.id, { tag: e.target.value })
                                }
                                placeholder="Classroom, Event, Award..."
                              />
                            </div>
                            <div className="md:col-span-4">
                              <label className="block text-xs font-medium mb-1">
                                Description (optional)
                              </label>
                              <Textarea
                                rows={2}
                                value={item.description || ""}
                                onChange={(e) =>
                                  updateGalleryItem(item.id, { description: e.target.value })
                                }
                              />
                            </div>
                            <div className="md:col-span-4 flex justify-end">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removeGalleryItem(item.id)}
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button type="submit">Save gallery</Button>
                    </form>
                  </section>
                )}
              </main>
            </div>

            {status && <p className="mt-4 text-sm text-muted-foreground">{status}</p>}
          </>
        )}
      </div>
    </div>
  );
}

