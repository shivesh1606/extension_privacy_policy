import './App.css'

function App() {
  return (
    <div className="privacy-policy">
      <header>
        <h1>Dark Mode Toggle Extension Privacy Policy</h1>
        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <main>
        <section>
          <h2>Overview</h2>
          <p>
            The Dark Mode Toggle Extension is committed to protecting your privacy. 
            This privacy policy explains our data collection and usage practices.
          </p>
        </section>

        <section>
          <h2>Data Collection</h2>
          <p>
            This extension does not collect, store, or transmit any personal information 
            or user data. The only data stored is:
          </p>
          <ul>
            <li>User's dark mode preference (on/off state)</li>
            <li>This preference is saved locally in the browser using Chrome's storage API</li>
            <li>No data is transmitted to external servers</li>
          </ul>
        </section>

        <section>
          <h2>Data Usage</h2>
          <ul>
            <li>The extension only modifies webpage appearance using CSS filters</li>
            <li>No user data is collected, shared, or transmitted</li>
            <li>No analytics or tracking mechanisms are implemented</li>
            <li>All operations are performed locally in the user's browser</li>
          </ul>
        </section>

        <section>
          <h2>Permissions</h2>
          <p>The extension requires the following permissions:</p>
          <ul>
            <li><strong>activeTab:</strong> To apply dark mode to the current webpage</li>
            <li><strong>storage:</strong> To save your dark mode preference locally</li>
            <li><strong>host:</strong> To apply dark mode styling across websites</li>
          </ul>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Users will be notified 
            of any changes through the Chrome Web Store listing.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, please contact us at:{' '}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Dark Mode Toggle Extension. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App