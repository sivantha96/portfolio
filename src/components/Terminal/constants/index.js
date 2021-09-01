export const STATUS = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARN: 'WARN',
  DEFAULT: 'DEFAULT',
};

export const HELP = {
  help_1: 'login                                     start the login process',
  help_2:
    'login   --email=<foo> --password=<bar>    login with email and password',
};

export const MESSAGES = {
  greeting: 'Welcome!',
  help: 'Type "help" to get started',
  enter_email: 'Enter your email:',
  enter_password: 'Enter your password:',
  permission_denied: 'Permission denied',
  invalid_command: (command) => `Invalid command ${command}`,
  command_not_found: (command) => `Command not found ${command}`,
  email_not_valid: (email) => `Email is not valid ${email}`,
};
