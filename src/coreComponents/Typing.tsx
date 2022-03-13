import React, {
  ForwardRefExoticComponent,
  RefObject,
  RefAttributes,
  forwardRef,
  memo,
} from "react";

interface TypingProps {
  ref: RefObject<HTMLDivElement>;
  typingGif: string;
  chatAvatar: string;
}

const Inner: ForwardRefExoticComponent<
  Omit<TypingProps, "ref"> & RefAttributes<HTMLDivElement>
> = forwardRef(({ typingGif, chatAvatar }, ref) => {
  return (
    <div ref={ref} className="rcb-typing-container">
      <span
        className="rcb-bot-avatar"
        style={{ backgroundImage: `url(${chatAvatar})` }}
      />
      <div className="rcb-bot-message rcb-typing-effect">
        <img width="40px" src={typingGif} alt="Typing Effect" />
      </div>
    </div>
  );
});

const Typing = memo(Inner);

export { Typing };
