export declare const framework7ReduxPlugin: {
    name: string;
    on: {
        init: () => void;
    };
    install(): void;
    create(instance: any): () => void;
};
