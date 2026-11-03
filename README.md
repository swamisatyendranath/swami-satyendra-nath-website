# स्वामी सत्येन्द्र नाथ जी - आधिकारिक आध्यात्मिक वेबसाइट
## (Swami Satyendra Nath Ji - Official Spiritual Website)

तंत्र, पूजा एवं वैदिक अनुष्ठान • दिल्ली • हरिद्वार • काशी (वाराणसी)

---

## 🚀 GitHub Pages पर प्रकाशित करने की सरल विधि (Free Deployment Guide)

यह प्रोजेक्ट GitHub Actions द्वारा पूरी तरह स्वचालित है। जब भी आप `main` या `master` ब्रांच में कोड पुश करेंगे, वेबसाइट अपने आप बिल्ड होकर GitHub Pages पर लाइव हो जाएगी।

### चरण 1: GitHub Repository सेट करें
सुनिश्चित करें कि आपकी GitHub repository का नाम **`swami-satyendra-nath-website`** है:
```bash
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/swami-satyendra-nath-website.git
git branch -M main
git push -u origin main
```

### चरण 2: GitHub Repository में Pages सक्रिय करें
1. GitHub पर अपनी repository (`swami-satyendra-nath-website`) खोलें।
2. **Settings** (सेटिंग्स) टैब पर क्लिक करें।
3. बायीं ओर के मेनू में **Pages** चुनें।
4. **Build and deployment** के तहत **Source** ड्रॉपडाउन में:
   - **`GitHub Actions`** चुनें।
5. बस! अब `.github/workflows/deploy.yml` अपने आप चलेगा और 1-2 मिनट में आपकी वेबसाइट लाइव हो जाएगी:
   👉 `https://<YOUR-GITHUB-USERNAME>.github.io/swami-satyendra-nath-website/`

---

## 🛠️ प्रोजेक्ट संरचना व कॉन्फ़िगरेशन
- **Vite Base Path:** `/swami-satyendra-nath-website/` (Vite प्रोडक्शन में स्वचालित सेट)
- **Deployment Workflow:** `.github/workflows/deploy.yml`
- **SPA Routing Fallback:** `public/404.html`
- **Dynamic Asset Resolution:** `src/data/content.ts` (सभी चित्र और वीडियो GitHub Pages पर सही लोड होते हैं)
- **Zero Cost:** 100% मुफ्त, किसी पेड सर्विस या बिलिंग की आवश्यकता नहीं।
