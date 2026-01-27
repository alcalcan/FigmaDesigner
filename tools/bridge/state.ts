export const BridgeState = {
    pendingCommand: null as string | null,
    spinnerInterval: null as NodeJS.Timeout | null,
};

export function setPendingCommand(command: string | null) {
    BridgeState.pendingCommand = command;
}

export function setSpinnerInterval(interval: NodeJS.Timeout | null) {
    BridgeState.spinnerInterval = interval;
}
