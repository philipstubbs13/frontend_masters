package fileutils

import "os"

func ReadTextFile(filename string) (string, error) {
	content, err := os.ReadFile(filename)
	if err != nil {
		// We couldn't read the file
		return "", err
	} else {
		// Read operation successful
		return string(content), nil
	}
}