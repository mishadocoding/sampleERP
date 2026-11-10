Circuit Market — Sample ERP

Open index.html in a modern browser. No installation or internet connection is required. System fonts work offline.

Presentation walkthrough
1. The app always starts in Uzbek (UZ), with an invitation to switch to Russian. Choose UZ, RU or EN beside the single profile button at any time. Language choice lasts until the next reload.
2. Use the role preview buttons to try Administrator and Seller dashboards. The rounded hamburger button hides the entire sidebar and moves the logo into the top bar. Use the same button to restore navigation. The profile button opens Settings for the administrator and the dashboard for the seller.
3. In Administrator mode, open Inventory and select a product to inspect details or adjust stock with a reason. Create an online or in-store order; its quantity is deducted from shared inventory. The quantity maximum follows the chosen product and submission checks stock again.
4. Open the order to update Processing → Shipped → Completed.
5. Visit Purchasing and receive a purchase order. Stock increases exactly once.
6. Add an employee in Employees; use search and location filtering.
7. Select a customer to see each separate purchase: order number, date, product, quantity, total and fulfillment status. Open any purchase for its full order details.
8. Administrator can download inventory, sales, employee and purchasing reports as CSV, JSON or printable HTML. Open an HTML report and use the browser's Print / Save as PDF for PDF output.
9. Seller sees operational stock, orders, customers and enabled reports. Seller stock exports include availability and selling prices; sales exports omit costs. Staff, supplier and finance reporting remain administrator-only. In Settings, Administrator can allow or disable seller order creation, fulfillment updates, sales exports and stock exports. These settings persist across reloads.
10. Customers are business records managed by staff, with individual purchase histories. There is no customer login, role or dashboard.
11. Settings shows the activity log and lets you reset all demo data, including seller permissions. All dropdowns share styled menus, keyboard arrows, Enter selection and Escape dismissal.

Scope
This is a local UI prototype with browser localStorage persistence. Role controls demonstrate permissions in the interface and action handlers. They are not authentication or a security boundary: all sample records are available in browser memory. Production authorization and stock reservation would require a backend. There are no payments, real accounting, payroll, taxes, multi-user synchronization or external integrations. Sales totals include all recorded orders. The trend chart is explicitly illustrative; other totals derive from workspace records. Seed orders and opening stock represent an existing business snapshot. Browser/file storage behavior varies; keep using the same browser and path. Reset in Settings to restore sample records. Use fictitious data only.

Files
index.html — application shell
styles.css — responsive interface
app.js — seed records, page rendering and interactions
features.js — role policy, role dashboards, customer history and report definitions
i18n.js — shared Uzbek, Russian and English UI translations
dropdowns.js — shared accessible dropdown controls and menu interactions
motion.js — Morph-style page, role and sidebar transitions; respects reduced-motion preferences
verify.cjs — dependency-free regression checks (run: node verify.cjs)
tests/browser.html — actual DOM interaction checks; run in an isolated browser profile because the checks create orders and change demo permissions
tests/layout.html — layout checks for all roles, pages and languages; append ?mobile to test a 390px frame

Currency: USD. Sample records use November 2026 dates; new records use the current device date. The header contains the menu, brand, language selector and profile. Page changes and sidebar movement animate briefly; system reduced-motion preferences disable animations.
