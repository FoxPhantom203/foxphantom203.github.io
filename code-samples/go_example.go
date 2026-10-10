// Foxor AI Go Example
// A comprehensive Go package demonstrating concurrent programming concepts

package main

import (
	"fmt"
	"strings"
	"sync"
	"time"
)

// FoxorConfig represents the configuration for Foxor AI
type FoxorConfig struct {
	Name            string
	Version         string
	MaxTokens       int
	Temperature     float64
	EnableCaching   bool
	ConcurrentLimit int
}

// DefaultConfig returns a default FoxorConfig
func DefaultConfig() FoxorConfig {
	return FoxorConfig{
		Name:            "Foxor AI",
		Version:         "2.0.0",
		MaxTokens:       2000,
		Temperature:     0.7,
		EnableCaching:   true,
		ConcurrentLimit: 10,
	}
}

// CodeAnalysis represents the result of code analysis
type CodeAnalysis struct {
	Issues     []string
	Warnings   []string
	Score      int
	Complexity float64
}

// String returns a formatted string representation of the analysis
func (ca CodeAnalysis) String() string {
	var sb strings.Builder
	sb.WriteString("Code Analysis Report\n")
	sb.WriteString("===================\n")
	sb.WriteString(fmt.Sprintf("Score: %d/100\n", ca.Score))
	sb.WriteString(fmt.Sprintf("Complexity: %.2f\n", ca.Complexity))

	if len(ca.Issues) > 0 {
		sb.WriteString("\nIssues:\n")
		for _, issue := range ca.Issues {
			sb.WriteString(fmt.Sprintf("  - %s\n", issue))
		}
	}

	if len(ca.Warnings) > 0 {
		sb.WriteString("\nWarnings:\n")
		for _, warning := range ca.Warnings {
			sb.WriteString(fmt.Sprintf("  - %s\n", warning))
		}
	}

	return sb.String()
}

// FoxorAI is the main AI assistant struct
type FoxorAI struct {
	config     FoxorConfig
	cache      map[string]string
	createdAt  time.Time
	mu         sync.RWMutex
	activeJobs int
}

// NewFoxorAI creates a new FoxorAI instance
func NewFoxorAI(config FoxorConfig) *FoxorAI {
	return &FoxorAI{
		config:    config,
		cache:     make(map[string]string),
		createdAt: time.Now(),
	}
}

// NewFoxorAIWithDefaults creates a FoxorAI with default configuration
func NewFoxorAIWithDefaults() *FoxorAI {
	return NewFoxorAI(DefaultConfig())
}

// GenerateResponse simulates generating an AI response
func (f *FoxorAI) GenerateResponse(prompt string) string {
	fmt.Printf("[Foxor AI] Processing prompt: %s\n", prompt)

	// Simulate processing time
	time.Sleep(100 * time.Millisecond)

	// Mock responses based on prompt
	switch {
	case strings.Contains(strings.ToLower(prompt), "hello") ||
		strings.Contains(strings.ToLower(prompt), "hi"):
		return fmt.Sprintf("Hello! I'm %s v%s, an advanced AI assistant.", 
			f.config.Name, f.config.Version)
	case strings.Contains(strings.ToLower(prompt), "code") ||
		strings.Contains(strings.ToLower(prompt), "go"):
		return `Here's some Go code for you:

package main

import "fmt"

func main() {
    fmt.Println("Hello from Foxor AI!")
}

This demonstrates basic Go syntax.`
	default:
		return fmt.Sprintf("I received your prompt: %s", prompt)
	}
}

// AnalyzeCode analyzes Go code for quality and issues
func (f *FoxorAI) AnalyzeCode(code string) CodeAnalysis {
	var issues []string
	var warnings []string
	score := 100
	complexity := 0.0

	// Check for common issues
	if !strings.Contains(code, "package main") &&
		!strings.Contains(code, "package ") {
		issues = append(issues, "No package declaration found")
		score -= 20
	}

	if !strings.Contains(code, "func main") &&
		!strings.Contains(code, "func ") {
		issues = append(issues, "No functions found")
		score -= 20
	}

	// Check for error handling
	if strings.Contains(code, "os.Open") &&
		!strings.Contains(code, "err") {
		warnings = append(warnings, "File operation without error handling")
		score -= 15
	}

	// Count lines for complexity
	lines := strings.Split(code, "\n")
	lineCount := len(lines)
	complexity = float64(lineCount) / 100.0
	if complexity > 1.0 {
		complexity = 1.0
	}

	if lineCount > 500 {
		warnings = append(warnings, "File is very long - consider splitting")
	}

	return CodeAnalysis{
		Issues:     issues,
		Warnings:   warnings,
		Score:      score,
		Complexity: complexity,
	}
}

// GenerateGoCode generates Go code from a description
func (f *FoxorAI) GenerateGoCode(description string) string {
	descriptionLower := strings.ToLower(description)

	switch {
	case strings.Contains(descriptionLower, "hello world"):
		return `package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
}`

	case strings.Contains(descriptionLower, "struct") ||
		strings.Contains(descriptionLower, "structure"):
		return `package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func (p Person) Greet() string {
	return fmt.Sprintf("Hello, %s!", p.Name)
}

func main() {
	person := Person{Name: "Alice", Age: 30}
	fmt.Println(person.Greet())
}`

	case strings.Contains(descriptionLower, "goroutine") ||
		strings.Contains(descriptionLower, "concurrent"):
		return `package main

import (
	"fmt"
	"sync"
	"time"
)

func worker(id int, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Printf("Worker %d starting\n", id)
	time.Sleep(time.Second)
	fmt.Printf("Worker %d done\n", id)
}

func main() {
	var wg sync.WaitGroup
	
	for i := 1; i <= 5; i++ {
		wg.Add(1)
		go worker(i, &wg)
	}
	
	wg.Wait()
	fmt.Println("All workers completed")
}`

	case strings.Contains(descriptionLower, "http") ||
		strings.Contains(descriptionLower, "server"):
		return `package main

import (
	"fmt"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello from Foxor AI HTTP Server!")
}

func main() {
	http.HandleFunc("/hello", helloHandler)
	
	fmt.Println("Server starting on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Printf("Server error: %v\n", err)
	}
}`

	default:
		return fmt.Sprintf(`// TODO: Implement %s
package main

import "fmt"

func main() {
	// Your code here
	fmt.Println("Generated by Foxor AI")
}`, description)
	}
}

// Uptime returns how long the FoxorAI instance has been running
func (f *FoxorAI) Uptime() time.Duration {
	return time.Since(f.createdAt)
}

// ClearCache clears the internal cache
func (f *FoxorAI) ClearCache() {
	f.mu.Lock()
	defer f.mu.Unlock()
	f.cache = make(map[string]string)
	fmt.Println("Cache cleared")
}

// ProcessConcurrently processes multiple prompts concurrently
func (f *FoxorAI) ProcessConcurrently(prompts []string) []string {
	results := make([]string, len(prompts))
	var wg sync.WaitGroup
	var mu sync.Mutex

	// Limit concurrency
	sem := make(chan struct{}, f.config.ConcurrentLimit)

	for i, prompt := range prompts {
		wg.Add(1)
		go func(index int, p string) {
			defer wg.Done()
			sem <- struct{}{}
			defer func() { <-sem }()

			response := f.GenerateResponse(p)

			mu.Lock()
			results[index] = response
			mu.Unlock()
		}(i, prompt)
	}

	wg.Wait()
	return results
}

// main function demonstrates Foxor AI usage
func main() {
	fmt.Println("======================================")
	fmt.Println("Foxor AI - Go Example")
	fmt.Println("======================================")
	fmt.Println()

	// Create FoxorAI instance
	foxor := NewFoxorAIWithDefaults()

	// Example 1: Generate a response
	response := foxor.GenerateResponse("hello")
	fmt.Println("Response:", response)
	fmt.Println()

	// Example 2: Generate Go code
	goCode := foxor.GenerateGoCode("struct")
	fmt.Println("Generated Go Code:")
	fmt.Println(goCode)
	fmt.Println()

	// Example 3: Analyze code
	analysis := foxor.AnalyzeCode(goCode)
	fmt.Println("Code Analysis:")
	fmt.Println(analysis.String())

	// Example 4: Show uptime
	fmt.Printf("Foxor AI Uptime: %v\n\n", foxor.Uptime())

	// Example 5: Concurrent processing
	prompts := []string{
		"hello",
		"tell me about Go",
		"generate code for http server",
		"what is concurrency?",
	}

	fmt.Println("Processing prompts concurrently...")
	results := foxor.ProcessConcurrently(prompts)
	fmt.Println()

	for i, result := range results {
		fmt.Printf("Result %d: %s\n\n", i+1, result)
	}

	// Example 6: More code generation
	goroutineCode := foxor.GenerateGoCode("goroutine")
	fmt.Println("Generated Goroutine Example:")
	fmt.Println(goroutineCode)

	fmt.Println()
	fmt.Println("======================================")
	fmt.Println("Foxor AI - Powered by Go")
	fmt.Println("======================================")
}
