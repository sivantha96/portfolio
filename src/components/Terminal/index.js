import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { validateEmail } from '../../utils';
import minimizeIcon from '../../assets/icons/minimize.svg';
import * as appActions from '../../store/AppStore/actions';
import { HELP, MESSAGES, STATUS } from './constants';

const Terminal = () => {
  const [terminalValues, setTerminalValues] = useState([
    {
      status: STATUS.DEFAULT,
      value: MESSAGES.greeting,
    },
    {
      status: STATUS.DEFAULT,
      value: MESSAGES.help,
    },
    {
      status: STATUS.DEFAULT,
      value: '\n',
    },
  ]);
  const [currentLine, setCurrentLine] = useState('');
  const [commandLines, setCommandLines] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentLineNo, setCurrentLineNo] = useState(0);
  const [, setEmail] = useState('');
  const [, setPassword] = useState('');
  const [submitType, setSubmitType] = useState('text');
  const textInput = useRef(null);
  const dispatch = useDispatch();

  const handleInLineLogin = (command) => {
    debugger;
    const commands = command.split(' ');
    if (commands[1] && commands[2]) {
      if (
        commands[1].startsWith('--email=') &&
        commands[2].startsWith('--password=')
      ) {
        const emailCommands = commands[1].split('=');
        const passwordCommands = commands[2].split('=');

        if (validateEmail(emailCommands[1])) {
          setEmail(emailCommands[1]);
          setPassword(passwordCommands[1]);

          handleLogin();
        } else {
          setTerminalValues([
            ...terminalValues,
            {
              status: STATUS.ERROR,
              value: MESSAGES.email_not_valid(emailCommands[1]),
            },
          ]);
        }
      } else if (
        commands[2].startsWith('--email=') &&
        commands[1].startsWith('--password=')
      ) {
        const emailCommands = commands[2].split('=');
        const passwordCommands = commands[1].split('=');

        if (validateEmail(emailCommands[1])) {
          setEmail(emailCommands[1]);
          setPassword(passwordCommands[1]);

          handleLogin();
        } else {
          setTerminalValues([
            ...terminalValues,
            {
              status: STATUS.ERROR,
              value: MESSAGES.email_not_valid(emailCommands[1]),
            },
          ]);
        }
      } else if (
        commands[1].startsWith('--email=') ||
        commands[1].startsWith('--password=')
      ) {
        setTerminalValues([
          ...terminalValues,
          {
            status: STATUS.ERROR,
            value: MESSAGES.invalid_command(commands[2]),
          },
        ]);
      } else if (
        commands[2].startsWith('--email=') ||
        commands[2].startsWith('--password=')
      ) {
        setTerminalValues([
          ...terminalValues,
          {
            status: STATUS.ERROR,
            value: MESSAGES.invalid_command(commands[1]),
          },
        ]);
      } else {
        setTerminalValues([
          ...terminalValues,
          {
            status: STATUS.ERROR,
            value: MESSAGES.invalid_command(command),
          },
          {
            status: STATUS.DEFAULT,
            value: MESSAGES.help,
          },
        ]);
      }
    } else {
      setTerminalValues([
        ...terminalValues,
        {
          status: STATUS.ERROR,
          value: MESSAGES.invalid_command(command),
        },
        {
          status: STATUS.DEFAULT,
          value: MESSAGES.help,
        },
      ]);
    }
  };

  const onSubmit = (command) => {
    const commands = command.split(' ');
    switch (commands[0]) {
      case 'login':
        if (commands[1] && commands[1].startsWith('--')) {
          handleInLineLogin(command);
        } else {
          setTerminalValues([
            ...terminalValues,
            {
              status: STATUS.DEFAULT,
              value: MESSAGES.enter_email,
            },
          ]);
          setSubmitType('email');
        }

        break;

      case 'help':
        setTerminalValues([
          ...terminalValues,
          {
            status: STATUS.DEFAULT,
            value: '\n',
          },
          {
            status: STATUS.DEFAULT,
            value: HELP.help_1,
          },
          {
            status: STATUS.DEFAULT,
            value: HELP.help_2,
          },
          {
            status: STATUS.DEFAULT,
            value: '\n',
          },
        ]);
        break;

      default:
        setTerminalValues([
          ...terminalValues,
          {
            status: STATUS.ERROR,
            value: MESSAGES.command_not_found(commands[0]),
          },
        ]);
        break;
    }

    scrollToInput();
  };

  const onSubmitEmail = (input) => {
    switch (true) {
      case input === 'cancel':
        setSubmitType('text');
        break;

      case validateEmail(input):
        setEmail(input);
        setTerminalValues([
          ...terminalValues,
          {
            status: STATUS.DEFAULT,
            value: MESSAGES.enter_password,
          },
        ]);
        setSubmitType('password');
        break;

      default:
        setTerminalValues([
          ...terminalValues,
          {
            status: STATUS.ERROR,
            value: MESSAGES.email_not_valid,
          },
        ]);
        break;
    }

    scrollToInput();
  };

  const handleLogin = () => {
    setTerminalValues([
      ...terminalValues,
      {
        status: STATUS.WARN,
        value: `Please wait...`,
      },
    ]);
    setLoading(true);
    setTimeout(() => {
      setTerminalValues([
        ...terminalValues.splice(-terminalValues.length),
        {
          status: STATUS.ERROR,
          value: MESSAGES.permission_denied,
        },
      ]);
      setLoading(false);
      setTimeout(() => {
        scrollToInput();
      }, 200);
    }, 8000);
    scrollToInput();
    return setSubmitType('text');
  };

  const scrollToInput = () => {
    setTimeout(() => {
      textInput?.current?.scrollIntoView();
    }, 200);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === 'ArrowDown' && currentLineNo < commandLines.length - 1) {
      setCurrentLine(commandLines[currentLineNo + 1]);
      setCurrentLineNo(currentLineNo + 1);
    }

    if (e.key === 'ArrowDown' && currentLineNo === commandLines.length - 1) {
      setCurrentLine('');
      setCurrentLineNo(currentLineNo + 1);
    }

    if (e.key === 'ArrowUp' && currentLineNo > 0) {
      setCurrentLine(commandLines[currentLineNo - 1]);
      setCurrentLineNo(currentLineNo - 1);
    }
  };

  const handleOnPressKey = (e) => {
    if (e.key === 'Enter') {
      const tempCurrentLine = currentLine;
      setCommandLines([...commandLines, tempCurrentLine]);
      setCurrentLineNo(currentLineNo + 1);
      terminalValues.push({
        status: STATUS.DEFAULT,
        value: `~ $ ${currentLine}`,
      });
      setCurrentLine('');

      switch (submitType) {
        case 'email':
          return onSubmitEmail(tempCurrentLine);

        case 'password':
          setPassword(tempCurrentLine);
          return handleLogin();

        default:
          return onSubmit(tempCurrentLine);
      }
    }
    scrollToInput();
  };

  const renderTerminalValues = () => {
    return terminalValues.map((item, index) => (
      <span
        key={index.toString()}
        style={styles.value(item.status)}
        className="terminal__value"
        onClick={() => {
          textInput?.current?.focus();
        }}
      >
        {item.value}
      </span>
    ));
  };

  return (
    <div
      className="w-full terminal flex flex-col"
      onClick={() => {
        textInput?.current?.focus();
      }}
    >
      <div className="terminal__header">
        <div
          className="terminal__icon__container hover:opacity-50"
          onClick={() => dispatch(appActions.toggleTerminal())}
        >
          <img
            src={minimizeIcon}
            id="dark-mode-toggle"
            className="filter-dark terminal__icon"
            alt="dark-mode-toggle"
            height="20"
            width="20"
          />
        </div>
      </div>
      <div className="terminal__content">
        {renderTerminalValues()}

        {!isLoading && (
          <div
            className="w-full flex flex-row"
            onClick={() => {
              textInput?.current?.focus();
            }}
          >
            <span className="terminal__prefix">{`~ $ `}</span>
            <input
              autoComplete="off"
              autoFocus
              type={submitType}
              spellCheck="false"
              name="terminal"
              className="terminal__input w-full"
              ref={textInput}
              value={currentLine}
              onKeyDown={handleOnKeyDown}
              onKeyPress={handleOnPressKey}
              onChange={(e) => {
                setCurrentLine(e.target.value);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  value: (status) => {
    switch (status) {
      case STATUS.SUCCESS:
        return { color: '#62b85a' };

      case STATUS.ERROR:
        return { color: '#871212' };

      case STATUS.WARN:
        return { color: '#e6b345' };

      default:
        return { color: '#ffffff' };
    }
  },
};

export default Terminal;
