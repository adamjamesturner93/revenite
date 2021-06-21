/**
 * Original source: https://gist.github.com/adamwathan/3b9f3ad1a285a2d1b482769aeb862467
 * Author: Adam Wathan
 *
 * I modified the script to not remove the enterTo and leaveTo classes upon completing the transition
 * Instead they're removed when the opposite transition begins
 */
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';
import React from 'react';

const TransitionContext = React.createContext({
  parent: { show: false, isInitialRender: true, appear: false },
});

function useIsInitialRender() {
  const isInitialRender = React.useRef(true);
  React.useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

interface TransitionProps {
  show: boolean;
  appear: boolean;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
}

const CSSTransition: React.FC<TransitionProps> = ({
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  appear,
  children,
}) => {
  const enterClasses = enter.split(' ').filter((s) => s.length);
  const enterFromClasses = enterFrom.split(' ').filter((s) => s.length);
  const enterToClasses = enterTo.split(' ').filter((s) => s.length);
  const leaveClasses = leave.split(' ').filter((s) => s.length);
  const leaveFromClasses = leaveFrom.split(' ').filter((s) => s.length);
  const leaveToClasses = leaveTo.split(' ').filter((s) => s.length);

  function addClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.remove(...classes);
  }

  return (
    <ReactCSSTransition
      appear={appear}
      unmountOnExit
      in={show}
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false);
      }}
      onEnter={(node: HTMLElement) => {
        removeClasses(node, [...leaveToClasses]);
        addClasses(node, [...enterClasses, ...enterFromClasses]);
      }}
      onEntering={(node: HTMLElement) => {
        removeClasses(node, [...enterFromClasses]);
        addClasses(node, [...enterToClasses]);
      }}
      onEntered={(node: HTMLElement) => {
        removeClasses(node, [...enterClasses]);
      }}
      onExit={(node: HTMLElement) => {
        removeClasses(node, [...enterToClasses]);
        addClasses(node, [...leaveClasses, ...leaveFromClasses]);
      }}
      onExiting={(node: HTMLElement) => {
        removeClasses(node, [...leaveFromClasses]);
        addClasses(node, [...leaveToClasses]);
      }}
      onExited={(node: HTMLElement) => {
        removeClasses(node, [...leaveClasses]);
      }}
    >
      {children}
    </ReactCSSTransition>
  );
};

export const Transition: React.FC<TransitionProps> = ({ show, appear = true, ...rest }) => {
  const { parent } = React.useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
};
