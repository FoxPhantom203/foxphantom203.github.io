//! Foxor AI Rust Example
//! A comprehensive Rust module demonstrating systems programming concepts

use std::collections::HashMap;
use std::fmt;
use std::time::{Duration, Instant};

/// Represents a Foxor AI configuration
#[derive(Debug, Clone)]
pub struct FoxorConfig {
    pub name: String,
    pub version: String,
    pub max_tokens: u32,
    pub temperature: f32,
    pub enable_caching: bool,
}

impl Default for FoxorConfig {
    fn default() -> Self {
        FoxorConfig {
            name: "Foxor AI".to_string(),
            version: "2.0.0".to_string(),
            max_tokens: 2000,
            temperature: 0.7,
            enable_caching: true,
        }
    }
}

/// Represents a code analysis result
#[derive(Debug)]
pub struct CodeAnalysis {
    pub issues: Vec<String>,
    pub warnings: Vec<String>,
    pub score: u8,
    pub complexity: f32,
}

impl fmt::Display for CodeAnalysis {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        writeln!(f, "Code Analysis Report")?;
        writeln!(f, "===================")?;
        writeln!(f, "Score: {}/100", self.score)?;
        writeln!(f, "Complexity: {:.2}", self.complexity)?;
        
        if !self.issues.is_empty() {
            writeln!(f, "\nIssues:")?;
            for issue in &self.issues {
                writeln!(f, "  - {}", issue)?;
            }
        }
        
        if !self.warnings.is_empty() {
            writeln!(f, "\nWarnings:")?;
            for warning in &self.warnings {
                writeln!(f, "  - {}", warning)?;
            }
        }
        
        Ok(())
    }
}

/// Main Foxor AI struct
pub struct FoxorAI {
    config: FoxorConfig,
    cache: HashMap<String, String>,
    created_at: Instant,
}

impl FoxorAI {
    /// Create a new FoxorAI instance
    pub fn new(config: FoxorConfig) -> Self {
        FoxorAI {
            config,
            cache: HashMap::new(),
            created_at: Instant::now(),
        }
    }
    
    /// Create with default configuration
    pub fn with_defaults() -> Self {
        Self::new(FoxorConfig::default())
    }
    
    /// Generate a response (simulated)
    pub fn generate_response(&self, prompt: &str) -> String {
        println!("[Foxor AI] Processing prompt: {}", prompt);
        
        // Simulate processing time
        std::thread::sleep(Duration::from_millis(100));
        
        // Mock response based on prompt
        if prompt.contains("hello") || prompt.contains("hi") {
            format!("Hello! I'm {} v{}, an advanced AI assistant.", 
                   self.config.name, self.config.version)
        } else if prompt.contains("code") || prompt.contains("rust") {
            "Here's some Rust code for you:

fn main() {
    println!(\"Hello from Foxor AI!\");
}

This demonstrates basic Rust syntax.".to_string()
        } else {
            format!("I received your prompt: {}", prompt)
        }
    }
    
    /// Analyze Rust code for quality
    pub fn analyze_code(&self, code: &str) -> CodeAnalysis {
        let mut issues = Vec::new();
        let mut warnings = Vec::new();
        let mut score = 100u8;
        let mut complexity = 0.0f32;
        
        // Check for common issues
        if !code.contains("fn main") && !code.contains("fn ") {
            issues.push("No functions found".to_string());
            score = score.saturating_sub(20);
        }
        
        if code.contains("unsafe ") {
            warnings.push("Uses unsafe code".to_string());
            score = score.saturating_sub(10);
        }
        
        if code.contains("unwrap()") {
            warnings.push("Uses unwrap() - consider proper error handling".to_string());
            score = score.saturating_sub(15);
        }
        
        // Count lines for complexity
        let lines = code.lines().count();
        complexity = if lines > 100 { 1.0 } else { lines as f32 / 100.0 };
        
        if lines > 500 {
            warnings.push("File is very long - consider splitting".to_string());
        }
        
        CodeAnalysis {
            issues,
            warnings,
            score,
            complexity,
        }
    }
    
    /// Generate Rust code from description
    pub fn generate_rust_code(&self, description: &str) -> String {
        match description.to_lowercase().as_str() {
            "hello world" => "fn main() {
    println!(\"Hello, World!\");
}".to_string(),
            
            "struct" | "structure" => "#[derive(Debug)]
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Self {
        Person { name, age }
    }
    
    fn greet(&self) -> String {
        format!(\"Hello, {}!\", self.name)
    }
}

fn main() {
    let person = Person::new(\"Alice\".to_string(), 30);
    println!(\"{}\", person.greet());
}".to_string(),
            
            "enum" => "enum Status {
    Success,
    Error(String),
    Loading,
}

fn handle_status(status: &Status) -> String {
    match status {
        Status::Success => \"Operation succeeded\".to_string(),
        Status::Error(msg) => format!(\"Error: {}\", msg),
        Status::Loading => \"Please wait...\".to_string(),
    }
}

fn main() {
    let status = Status::Success;
    println!(\"{}\", handle_status(&status));
}".to_string(),
            
            "trait" => "trait Greet {
    fn greet(&self) -> String;
}

struct Dog {
    name: String,
}

impl Greet for Dog {
    fn greet(&self) -> String {
        format!(\"Woof! I'm {}!\", self.name)
    }
}

fn main() {
    let dog = Dog { name: \"Rusty\".to_string() };
    println!(\"{}\", dog.greet());
}".to_string(),
            
            _ => format!("// TODO: Implement {}
fn main() {{
    // Your code here
}}", description)
        }
    }
    
    /// Get uptime
    pub fn uptime(&self) -> Duration {
        self.created_at.elapsed()
    }
    
    /// Clear cache
    pub fn clear_cache(&mut self) {
        self.cache.clear();
        println!("Cache cleared");
    }
}

// ============================================
// Example Usage
// ============================================

fn main() {
    println!("======================================");
    println!("Foxor AI - Rust Example");
    println!("======================================\n");
    
    // Create FoxorAI instance
    let foxor = FoxorAI::with_defaults();
    
    // Example 1: Generate a response
    let response = foxor.generate_response("hello");
    println!("Response: {}\n", response);
    
    // Example 2: Generate Rust code
    let rust_code = foxor.generate_rust_code("struct");
    println!("Generated Rust Code:\n{}\n", rust_code);
    
    // Example 3: Analyze code
    let analysis = foxor.analyze_code(&rust_code);
    println!("Code Analysis:\n{}\n", analysis);
    
    // Example 4: Show uptime
    println!("Foxor AI Uptime: {:?}", foxor.uptime());
    
    // Example 5: More code generation
    let enum_code = foxor.generate_rust_code("enum");
    println!("\nGenerated Enum Example:\n{}", enum_code);
    
    println!("\n======================================");
    println!("Foxor AI - Powered by Rust");
    println!("======================================");
}

// ============================================
// Tests
// ============================================

#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn test_config_default() {
        let config = FoxorConfig::default();
        assert_eq!(config.name, "Foxor AI");
        assert_eq!(config.version, "2.0.0");
    }
    
    #[test]
    fn test_foxor_creation() {
        let foxor = FoxorAI::with_defaults();
        assert_eq!(foxor.config.name, "Foxor AI");
    }
    
    #[test]
    fn test_code_generation() {
        let foxor = FoxorAI::with_defaults();
        let code = foxor.generate_rust_code("hello world");
        assert!(code.contains("Hello, World!"));
    }
    
    #[test]
    fn test_code_analysis() {
        let foxor = FoxorAI::with_defaults();
        let code = "fn main() { println!(\"test\"); } ";
        let analysis = foxor.analyze_code(code);
        assert!(analysis.score <= 100);
    }
}
