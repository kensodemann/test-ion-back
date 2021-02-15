export interface CanNavigateAway {
  canNavigateAway(toRoute: string): Promise<boolean>
}
