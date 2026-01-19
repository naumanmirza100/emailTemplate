# Email Sender Server

This is a local email sending server for testing purposes.

## Setup

1. **Install dependencies:**
   ```bash
   cd LocalTest
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env` file in the root directory (one level up from LocalTest folder)
   - Add your Hostinger email credentials:
     ```
     email_user=yourname@yourdomain.com
     pwd=your-email-password
     ```

   **Note for Hostinger email:**
   - Use your full Hostinger email address (e.g., `yourname@yourdomain.com`)
   - Use your Hostinger email account password
   - The server is configured to use Hostinger's SMTP server (`smtp.hostinger.com`) on port 465 with SSL

3. **Start the server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:3001`

## Usage

1. Start the email server (see above)
2. Open your browser and navigate to `http://localhost:3001`
3. You'll see the email sender page with:
   - A text box to enter multiple email addresses (separated by commas or new lines)
   - A subject field
   - A content field for the email body
4. Fill in all the fields and click "Send Emails"
5. The page will show success/error messages as notifications

**Note:** The `.env` file should be in the root directory (one level up from LocalTest folder) with `email_user` and `pwd` variables.

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/send-email` - Send emails to multiple recipients
  - Body: `{ emails: string[], subject: string, content: string }`

