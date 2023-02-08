shlle
=====

Tiny shell that run command with reversed arguments.

Usage
-----

```shell
$ shlle echo foo bar
bar foo
```

```shell
$ shlle
< echo foo bar
bar foo
```

That's all!

Main use case like this:

```shell
$ shlle grep /path/to/grep -R <words>
```
