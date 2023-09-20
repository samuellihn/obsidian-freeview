`makefile`s automate the build process for [[Multifile C Programs]] so we don't have to keep track of [[C Object Files]] ourselves

Symbolic constants can be defined shell-style with `$`

Format of a makefile:

```sh

< symbolic constants >

< makefile rules > (first is default)
```

Example makefile:

```sh
CC=gcc
CFLAGS=-std=c99 -pedantic -Wall -Wextra

main: main.o functions.o
	$(CC) -o main main.o functions.o

main.o: main.c functions.c
	$(CC) $(CFLAGS) -c main.c

functions.o: functions.c functions.h
	$(CC) $(CFLAGS) -c functions.c

clean:
	rm -f *.o main
```

Running `make` will go down the dependency tree, recompiling and linking files as needed
