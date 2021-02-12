import prettyFileSize from '../src';

describe('pretty-file-size', () => {
  it('formats', () => {
    expect(prettyFileSize(245)).toEqual('245 B');
    expect(prettyFileSize(34892075)).toEqual('33.3 MB');
    expect(prettyFileSize(6000)).toEqual('5.9 kB');
    expect(prettyFileSize(-1000000000000000000000000000)).toEqual('-827.2 YB');
    expect(prettyFileSize(456354)).toEqual('445.7 kB');
    expect(prettyFileSize(65765)).toEqual('64.2 kB');
    expect(prettyFileSize(657237, 2)).toEqual('641.83 kB');
    expect(prettyFileSize(657237, 0)).toEqual('642 kB');
  });
});
