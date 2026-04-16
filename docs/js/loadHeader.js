document.addEventListener("DOMContentLoaded", async () => {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");

  const glossaryTargets = {
    "3d model": "term-3d-model",
    repository: "term-repository",
    repositories: "term-repository",
    metadata: "term-metadata",
    paradata: "term-paradata",
    "preservation master": "term-preservation-master",
    "preservation masters": "term-preservation-master",
    "access derivative": "term-access-derivative",
    "access derivatives": "term-access-derivative",
    "print derivative": "term-print-derivative",
    "print derivatives": "term-print-derivative",
    "point cloud": "term-point-cloud",
    "point clouds": "term-point-cloud",
    registration: "term-registration",
    registrations: "term-registration",
    decimation: "term-decimation",
    "relative path": "term-relative-path",
    "relative paths": "term-relative-path",
    interoperability: "term-interoperability",
    fixity: "term-fixity",
    checksum: "term-fixity",
    checksums: "term-fixity",
    provenance: "term-provenance",
    version: "term-version",
    versions: "term-version",
    "rights statement": "term-rights-statement",
    "rights statements": "term-rights-statement",
    "access level": "term-access-level",
    "access levels": "term-access-level",
    fair: "term-fair",
    care: "term-care",
    doi: "term-doi",
    dois: "term-doi"
  };

  const pageSources = {
    "page-home": [
      { label: "Data Curation Network - 3D Data Curation Primer", url: "https://github.com/DataCurationNetwork/data-primers/blob/main/curated.md" },
      { label: "NDSA - Levels of Digital Preservation", url: "https://ndsa.org/publications/levels-of-digital-preservation/" },
      { label: "Open Preservation - Preserving 3D Scans", url: "https://openpreservation.org/blogs/preserving-3d-scans-a-journey/" }
    ],
    "page-workflow": [
      { label: "Digital Preservation Coalition - Preserving 3D (DOI)", url: "https://doi.org/10.7207/twgn21-14" },
      { label: "Data Curation Network - 3D Data Curation Primer", url: "https://github.com/DataCurationNetwork/data-primers/blob/main/curated.md" },
      { label: "NDSA - Levels of Digital Preservation", url: "https://ndsa.org/publications/levels-of-digital-preservation/" }
    ],
    "page-repo": [
      { label: "Harvard Data Management - File Naming Conventions", url: "https://datamanagement.hms.harvard.edu/plan-design/file-naming-conventions" },
      { label: "Duke Libraries - Recommended Preservation Formats", url: "https://library.duke.edu/using/policies/recommended-file-formats-digital-preservation" },
      { label: "Open Preservation - Preserving 3D Scans", url: "https://openpreservation.org/blogs/preserving-3d-scans-a-journey/" }
    ],
    "page-files": [
      { label: "Harvard Medical School - File Naming Conventions", url: "https://datamanagement.hms.harvard.edu/plan-design/file-naming-conventions" },
      { label: "Library of Congress - Sustainability of Digital Formats", url: "https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml" },
      { label: "Khronos - glTF Overview", url: "https://www.khronos.org/gltf/" },
      { label: "Library of Congress - STL Format Description", url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000504.shtml" }
    ],
    "page-metadata": [
      { label: "University of Melbourne - 3D Model Metadata Guide", url: "https://lms.unimelb.edu.au/staff/guides/pedestal-3d/3d-model-metadata-guide" },
      { label: "Proposal for FAIR Management of 3D Data (DOI)", url: "https://doi.org/10.29173/iq20" },
      { label: "Data Curation Network - 3D Data Curation Primer", url: "https://github.com/DataCurationNetwork/data-primers/blob/main/curated.md" }
    ],
    "page-storage": [
      { label: "NDSA - Levels of Digital Preservation", url: "https://ndsa.org/publications/levels-of-digital-preservation/" },
      { label: "Library of Congress - Sustainability of Digital Formats", url: "https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml" },
      { label: "UK Data Service - Costing to Share Data", url: "https://ukdataservice.ac.uk/learning-hub/research-data-management/plan-to-share/costing/" }
    ],
    "page-policies": [
      { label: "WIPO - Copyright Exceptions: An Archivist's Perspective", url: "https://www.wipo.int/en/web/wipo-magazine/article-details/?assetRef=40079&title=copyright-exceptions-an-archivists-perspective" },
      { label: "Michael Weinberg - 3D Scanning and Copyright", url: "https://michaelweinberg.org/docs/white-paper-3d-scanning-world-without-copyright.pdf" },
      { label: "DataCite DOI Services", url: "https://datacite.org/" }
    ],
    "page-resources": [
      { label: "Digital Preservation Coalition - Preserving 3D (DOI)", url: "https://doi.org/10.7207/twgn21-14" },
      { label: "Library of Congress - Sustainability of Digital Formats", url: "https://www.loc.gov/preservation/digital/formats/sustain/sustain.shtml" },
      { label: "Zenodo", url: "https://zenodo.org/" }
    ],
    "page-practice": [
      { label: "TREC - Tom Ridge Environmental Center", url: "https://skehttps://www.pa.gov/agencies/dcnr/recreation/where-to-go/state-parks/find-a-park/presque-isle-state-park/trectchfab.com/3d-models/lake-erie-lighthouse-a61c0c8c840d4fe4be794b275c1a4f9d" }
    ]
  };

  const headerFallback = `<header>
  <div class="wrap">
    <div class="header-row">
      <a class="brand-home" href="./index.html" aria-label="Sustain 3D home">
        <img src="./assets/Sustain3d_logoV2.png" alt="Sustain 3D" class="logo" />
      </a>
    </div>

    <nav>
      <a href="./index.html">Home</a>
      <a href="./workflow.html">Workflow</a>
      <a href="./repository.html">Repository Setup</a>
      <a href="./files.html">Files</a>
      <a href="./metadata.html">Metadata</a>
      <a href="./storage.html">Storage</a>
      <a href="./policies.html">Policies</a>
      <a href="./resources.html">Resources</a>
      <a href="./in-practice.html">In Practice</a>
    </nav>
  </div>
</header>`;

  const footerFallback = `<footer>
  <div class="wrap footer-shell">
    <div class="footer-meta-row">
      <p class="footer-meta">
        &copy; <span id="year"></span> Sustain 3D by
        <a href="https://remingtonorange.com" target="_blank" rel="noopener noreferrer">Remington Orange</a>
        - Licensed under
        <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noreferrer">Creative Commons CC0 1.0 Universal</a>
      </p>
      <p class="footer-last-updated">Last Updated <span id="last-updated"></span></p>
    </div>

    <details class="footer-citation">
      <summary class="footer-cite-toggle">How to cite</summary>
      <div class="footer-citation-body">
        <p class="summary-kicker">Suggested Citation</p>
        <p class="footer-citation-text" id="site-citation-text"></p>
        <p class="note">Homepage: <a class="footer-site-link" id="site-home-link" href="./index.html">./index.html</a></p>
        <p class="note">Creator: <a href="https://remingtonorange.com" target="_blank" rel="noopener noreferrer">Remington Orange</a></p>
        <div class="template-actions">
          <button class="btn secondary" type="button" id="copy-site-citation">Copy citation</button>
        </div>
      </div>
    </details>
  </div>
</footer>`;

  const siteCitation = {
    author: "Remington Orange",
    title: "Sustain 3D: Practical 3D Data Preservation",
    publisher: "Sustain 3D",
    lastUpdated: "2026-04-16"
  };

  const displayDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${siteCitation.lastUpdated}T12:00:00`));

  const setActiveNav = () => {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach((a) => {
      const href = (a.getAttribute("href") || "").split("/").pop();
      if (href === current) a.setAttribute("aria-current", "page");
    });
  };

  const bindTemplateCopyButtons = () => {
    document.querySelectorAll("[data-copy-target]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const targetId = btn.getAttribute("data-copy-target");
        if (!targetId) return;
        const codeEl = document.getElementById(targetId);
        if (!codeEl) return;

        const previousText = btn.textContent;
        try {
          await navigator.clipboard.writeText(codeEl.textContent || "");
          btn.textContent = "Copied";
        } catch (e) {
          btn.textContent = "Copy failed";
          console.warn("Clipboard write failed.", e);
        }
        setTimeout(() => {
          btn.textContent = previousText;
        }, 1400);
      });
    });
  };

  const setFooterMeta = () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    const lastUpdated = document.getElementById("last-updated");
    if (lastUpdated) lastUpdated.textContent = displayDate;

    const homepageUrl = window.location.protocol === "file:"
      ? "./index.html"
      : new URL("./index.html", window.location.href).href;
    const citationText = `${siteCitation.author}. "${siteCitation.title}." ${siteCitation.publisher}, last updated ${displayDate}.`;
    const copyText = window.location.protocol === "file:"
      ? citationText
      : `${citationText} ${homepageUrl}`;

    const citationEl = document.getElementById("site-citation-text");
    if (citationEl) citationEl.textContent = citationText;

    const homepageLink = document.getElementById("site-home-link");
    if (homepageLink) {
      homepageLink.href = homepageUrl;
      homepageLink.textContent = homepageUrl;
    }

    const copyBtn = document.getElementById("copy-site-citation");
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        const previousText = copyBtn.textContent;
        try {
          await navigator.clipboard.writeText(copyText);
          copyBtn.textContent = "Copied";
        } catch (e) {
          copyBtn.textContent = "Copy failed";
          console.warn("Clipboard write failed.", e);
        }
        setTimeout(() => {
          copyBtn.textContent = previousText;
        }, 1200);
      });
    }
  };

  const setTabState = (root, target) => {
    root.querySelectorAll("[data-tab-trigger]").forEach((btn) => {
      const active = btn.getAttribute("data-tab-trigger") === target;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    root.querySelectorAll("[data-tab-panel]").forEach((panel) => {
      const active = panel.getAttribute("data-tab-panel") === target;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
  };

  const initTabs = () => {
    document.querySelectorAll("[data-tabset]").forEach((root) => {
      const triggers = Array.from(root.querySelectorAll("[data-tab-trigger]"));
      if (!triggers.length) return;

      const activeTrigger = triggers.find((btn) => btn.classList.contains("is-active")) || triggers[0];
      const activeTarget = activeTrigger.getAttribute("data-tab-trigger");
      if (!activeTarget) return;

      setTabState(root, activeTarget);

      triggers.forEach((btn) => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-tab-trigger");
          if (target) setTabState(root, target);
        });
      });
    });
  };

  const setExplainerState = (root, target) => {
    root.querySelectorAll("[data-explainer-target]").forEach((btn) => {
      const active = btn.getAttribute("data-explainer-target") === target;
      btn.classList.toggle("is-active", active);
      if (btn.matches("button")) btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    root.querySelectorAll("[data-explainer-panel]").forEach((panel) => {
      const active = panel.getAttribute("data-explainer-panel") === target;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });

  };

  const syncExplainersForJumpTarget = (targetId) => {
    document.querySelectorAll(`[data-jump-target="${targetId}"][data-explainer-target]`).forEach((trigger) => {
      const root = trigger.closest("[data-explainer]");
      const explainerTarget = trigger.getAttribute("data-explainer-target");
      if (root && explainerTarget) setExplainerState(root, explainerTarget);
    });
  };

  const initExplainers = () => {
    document.querySelectorAll("[data-explainer]").forEach((root) => {
      const targets = Array.from(root.querySelectorAll("[data-explainer-target]"));
      if (!targets.length) return;

      const activeTarget = (targets.find((btn) => btn.classList.contains("is-active")) || targets[0]).getAttribute("data-explainer-target");
      if (!activeTarget) return;

      setExplainerState(root, activeTarget);

      targets.forEach((btn) => {
        const activate = () => {
          const target = btn.getAttribute("data-explainer-target");
          if (target) setExplainerState(root, target);
        };

        btn.addEventListener("click", activate);
        btn.addEventListener("focus", activate);
        btn.addEventListener("mouseenter", activate);
      });
    });
  };

  const initJumpLinks = () => {
    document.querySelectorAll("[data-jump-target]").forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        const targetId = trigger.getAttribute("data-jump-target");
        if (!targetId) return;

        const target = document.getElementById(targetId);
        if (!target) return;

        event.preventDefault();

        const disclosure = target.matches("details") ? target : target.closest("details");
        if (disclosure) disclosure.open = true;

        syncExplainersForJumpTarget(targetId);

        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, "", `#${targetId}`);
        } else {
          window.location.hash = targetId;
        }

        target.classList.remove("pip-spotlight");
        void target.offsetWidth;
        target.classList.add("pip-spotlight");
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        window.setTimeout(() => {
          target.classList.remove("pip-spotlight");
        }, 1300);
      });
    });
  };

  const openDisclosureForHash = () => {
    const hash = window.location.hash;
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    const details = target.matches("details") ? target : target.closest("details");
    if (details) details.open = true;

    if (target.id) syncExplainersForJumpTarget(target.id);
  };

  const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const addGlossaryLinks = () => {
    if (document.body.classList.contains("page-resources")) return;
    const main = document.querySelector("main");
    if (!main) return;

    const terms = Object.keys(glossaryTargets).sort((a, b) => b.length - a.length);
    const regex = new RegExp(`\\b(${terms.map(escapeRegExp).join("|")})\\b`, "gi");
    const skipTags = new Set(["A", "CODE", "PRE", "SCRIPT", "STYLE", "BUTTON", "TEXTAREA", "INPUT", "SELECT"]);
    const textNodes = [];
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        let parent = node.parentElement;
        while (parent) {
          if (skipTags.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
          if (parent.classList.contains("glossary")) return NodeFilter.FILTER_REJECT;
          if (parent.classList.contains("sources-lowkey")) return NodeFilter.FILTER_REJECT;
          parent = parent.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    let current = walker.nextNode();
    while (current) {
      textNodes.push(current);
      current = walker.nextNode();
    }

    textNodes.forEach((node) => {
      const text = node.nodeValue;
      regex.lastIndex = 0;
      if (!regex.test(text)) return;

      const fragment = document.createDocumentFragment();
      regex.lastIndex = 0;
      let lastIndex = 0;
      let match = regex.exec(text);

      while (match) {
        const matchText = match[0];
        const targetId = glossaryTargets[matchText.toLowerCase()];
        if (targetId) {
          if (match.index > lastIndex) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
          }
          const link = document.createElement("a");
          link.className = "glossary-link";
          link.href = `./resources.html#${targetId}`;
          link.textContent = matchText;
          fragment.appendChild(link);
          lastIndex = match.index + matchText.length;
        }
        match = regex.exec(text);
      }

      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      }

      if (node.parentNode) node.parentNode.replaceChild(fragment, node);
    });
  };

  const appendLowKeySources = () => {
    const main = document.querySelector("main.wrap");
    if (!main || main.querySelector(".sources-lowkey")) return;
    const pageClass = Array.from(document.body.classList).find((name) => name.startsWith("page-"));
    if (!pageClass || !pageSources[pageClass]) return;
    if (pageClass === "page-resources") return;

    const sourceList = pageSources[pageClass]
      .map((item) => `<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a></li>`)
      .join("");
    const section = document.createElement("section");
    section.className = "card sources-lowkey";
    section.innerHTML = `
      <h2>Sources</h2>
      <ul>${sourceList}</ul>
    `;
    main.appendChild(section);
  };

  if (headerMount) {
    try {
      const res = await fetch("./partials/headers.html", { cache: "no-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      headerMount.innerHTML = await res.text();
    } catch (e) {
      headerMount.innerHTML = headerFallback;
      console.warn("Header partial load failed; using fallback.", e);
    }
    setActiveNav();
  }

  if (footerMount) {
    try {
      const res = await fetch("./partials/footer.html", { cache: "no-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      footerMount.innerHTML = await res.text();
    } catch (e) {
      footerMount.innerHTML = footerFallback;
      console.warn("Footer partial load failed; using fallback.", e);
    }
    setFooterMeta();
  }

  bindTemplateCopyButtons();
  addGlossaryLinks();
  appendLowKeySources();
  initTabs();
  initExplainers();
  initJumpLinks();
  openDisclosureForHash();
  window.addEventListener("hashchange", openDisclosureForHash);
});
