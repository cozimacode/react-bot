// Type definitions for ReactBot v2.0.0
// Project: <https://github.com/cozimacode/react-bot>
// Definitions by: Naser Baig <https://github.com/cozimacode>

import { ElementType } from "react";

export const ReactBot: ElementType;

export function addUserMessage(message: string, botId?: string): Promise<void>;
export function addBotMessage(message: string, botId?: string): Promise<void>;
export function addCustomComponent(
  {
    Component,
    props,
    avatar,
  }: {
    Component: ElementType;
    props: Record<string, unknown>;
    avatar?: boolean;
  },
  botId?: string
): Promise<void>;
