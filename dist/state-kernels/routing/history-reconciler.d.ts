export interface IHistoryOperation {
    url: string;
    forward: boolean;
    replace: boolean;
}
export declare class HistoryReconciler {
    private router;
    private framework7History;
    private newHistory;
    private operations;
    constructor(router: any, framework7History: string[], newHistory: string[]);
    getOperationsToReconcileHistories(): IHistoryOperation[];
    private readonly currentF7HistoryUrl;
    private readonly currentNewHistoryUrl;
    private readonly currentF7HistoryPagePath;
    private readonly currentNewHistoryPagePath;
    private fastForwardToFirstNonMatchingPage();
    private rewindFramework7History();
    private framework7HasHistoryAtCurrentPosition();
    private replaceLastFramework7UrlWithNewUrl();
    private addRemainingNewUrlsToFramework7History();
}
