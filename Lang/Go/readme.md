package main

import "fmt"

func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
	fmt.Println(split(17))
}


Go's return values may be named. If so, they are treated as variables defined at the top of the function.

These names should be used to document the meaning of the return values.

A return statement without arguments returns the named return values. This is known as a "naked" return.



-------------

For is Go's "while"
At that point you can drop the semicolons: C's while is spelled for in Go.


```go
package main

import "fmt"

func main() {
	sum := 1
	for sum < 1000 {
		sum += sum
	}
	fmt.Println(sum)
}
```

output = 1024



--------


for u böyle de kullanabiliyoruz


```go
package main

import "fmt"

func main() {
	sum := 1
	for ; sum < 1000; {
		sum += sum
	}
	fmt.Println(sum)
}

```


------


```go
package main

func main() {
	for {
	}
}
```

loops 4ever

------

> A defer statement defers the execution of a function until the surrounding function returns.
The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.

>fonksiyonun başında çalışmaya başlar, ancak devamındaki işlem bitmeden çağrılmaz.





```go
package main

import "fmt"

func main() {
	fmt.Println("counting")

	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}

	fmt.Println("done")
}

```

### output:

```
counting
done
9
8
7
6
5
4
3
2
1
0
```
