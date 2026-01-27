export interface BridgeFile {
    name: string;
    path: string;
    project: string;
}

export interface Packet {
    name: string;
    data: unknown;
    assets?: { fileName: string, content: string }[];
}

export interface SavePacketRequest {
    projectName: string;
    name: string;
    data: unknown;
    assets?: { fileName: string, content: string }[];
}

export interface GenerateCodePreviewRequest {
    packet: Packet;
    options?: {
        compact?: boolean;
        refactor?: boolean;
    };
}

export interface GenerateToCodeRequest {
    path: string;
    project: string;
    simplified?: boolean;
    refactor?: boolean;
    compact?: boolean;
}
