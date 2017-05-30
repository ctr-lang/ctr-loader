# What is this?

This "test" runs after every real test. The reason this has to be done is due to the nature of how the `ctr-loader` works. Without this reset test, the `ctr` instance that is passed to every test is the same `ctr` instance. This creates a problem because said `ctr` would carry over options/variables from previous tests and fuck up my day. This reset test, in turn, is the cleanest solution I could come up with that does not alter or change the tests.
