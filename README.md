# cryptosentine

overview:
CryptoSentinel is a lightweight, client-side web application designed to demonstrate and teach fundamental concepts of cyber security. It integrates multiple security mechanisms such as AES-based message encryption and decryption, cryptographic hash generation (SHA-256, SHA-512, and Whirlpool), password strength evaluation, and file integrity tracking with timeline visualization. Since all computations are performed locally within the browser, no data is transmitted to external servers, ensuring complete privacy. This makes the toolkit not only secure but also highly accessible for students, educators, and security enthusiasts who want to experiment with core principles of confidentiality, integrity, and authentication in a hands-on manner.

Key Features:

1.AES-based Message Encryption & Decryption: Securely encrypt and decrypt text messages.

2.Cryptographic Hashing: Generate SHA-256, SHA-512, and Whirlpool hashes for files or messages.

3.Password Strength Evaluation: Check and rate the strength of passwords.

4.File Integrity Tracking: Monitor file changes with timeline visualization to understand integrity.

Target Users:
Students, educators, and security enthusiasts who want to explore cyber security principles like confidentiality, integrity, and authentication through interactive learning.

Outcome:
A secure, educational, and interactive platform where users can experiment with encryption, hashing, and other core cyber security operations in a safe and private environment.


How CryptoSentinel Works (Run Process)

1.Open the Web Application

  Launch the index.html file in a browser.

  The app loads with sections for Message Encryption/Decryption, Hash Generator, Password Strength Checker, and File Integrity Timeline.

  Encrypt / Decrypt Messages

  Enter a message in the message box.

  Enter a secret key.

  Click Encrypt to encrypt the message using AES encryption.

  The encrypted result appears in the Result area.

  To decrypt, paste the encrypted text in the message box, enter the same key, and click Decrypt.

  The decrypted text will appear, or an error message if the key is incorrect.

2.Generate Cryptographic Hash

  Select a file using the file input.

  Click Generate Hash.

  The app reads the file locally and generates SHA-256 and SHA-512 hashes.

  The hashes are displayed in the hash result area.

3.Check Password Strength

  Enter a password in the password input box.

  Click Check Password.

  The app evaluates the password based on length, lowercase, uppercase, numbers, and special characters.

  It displays the password strength as Weak, Medium, or Strong with color-coded feedback.

4.Track File Integrity

  Select a file using the timeline file input.

  Click Track Integrity.

  The app reads the file locally and calculates a SHA-256 hash.

  Each hash is logged with the current timestamp.

  The line chart updates to show the file integrity timeline, visualizing changes over time.
