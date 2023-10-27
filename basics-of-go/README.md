# Basics of Go

- <https://frontendmasters.com/courses/go-basics/>

* course code: <https://github.com/firtman/go-fundamentals>
* <https://github.com/firtman/go-fundamentals/blob/main/slides.pdf>
* <https://go.dev/dl/>
* <https://go.dev/>
* <https://github.com/gopherjs/gopherjs>
* <https://gist.github.com/asukakenji/f15ba7e588ac42795f421b48b8aede63>
* <https://pkg.go.dev/fmt>
* <https://pkg.go.dev/io/ioutil@go1.20.5#ReadFile>

```bash
go run first.go
```

```bash
go build
```

- CLI manipulates the module

```bash
go mod init

go build

go run

go test

go get
```

```bash
go run .
```

- CLI manipulates the workspace

```bash
go work init
```

```bash
go mod init frontendmasters.com/go/calc
```

Compiling the project

```bash
go build *
```

Compiling in one specific output folder

```bash
go build . -o build/
```

Compiling for other platforms and OSs

```bash
env GOOS=target-OS
    GOARCH=target-architecture go build .
```

Compile and install

```bash
go install .
```

Packaging
* Go just produces a binary
* It doesn't provide any packaging solution
* If we want to embed assets for an app we need to use third-party or OSs tools.
