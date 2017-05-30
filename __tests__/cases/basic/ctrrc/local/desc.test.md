__Description__: Should be able to use `.ctrrc` locally if the user would like the `.ctrrc` to be a bit closer to home. Test verify both local variables -> `$$` and ctr options -> `option` are picked up

__Notes__

+ Unlike the `/root` test this using the local `.ctrrc` in `/src`
+ I recommend you put the `.ctrrc` in the root but hey, I'm not your mother
+ You should avoid using `require` in `ctr` styles, however for testing purposes I use `require` in `/basic` and `requireWatch`, what you should use, in `/watch`
