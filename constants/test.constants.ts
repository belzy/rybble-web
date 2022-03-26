
type TTest = {
  SNAPSHOT_STRINGS: Array<string>
};

/**
 * Message strings to be used with testing functions like 'describe' and 'it'.
 * 
 * @example 
 * it(SNAPSHOT_STRINGS[0], () => {
 * 
 * // Your Test...
 * 
 * })
 */
export const TEST_STRINGS: TTest = {
  SNAPSHOT_STRINGS: [
    'should match snapshot'
  ]

};