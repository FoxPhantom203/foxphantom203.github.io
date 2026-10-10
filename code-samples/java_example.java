// Foxor AI Java Example
// A comprehensive Java class demonstrating OOP and functional programming concepts

import java.util.*;
import java.util.stream.*;
import java.time.*;
import java.time.format.*;

/**
 * Foxor AI Configuration class
 */
class FoxorConfig {
    private String name;
    private String version;
    private int maxTokens;
    private double temperature;
    private boolean enableCaching;
    private int concurrentLimit;
    
    public FoxorConfig(String name, String version, int maxTokens, double temperature, 
                      boolean enableCaching, int concurrentLimit) {
        this.name = name;
        this.version = version;
        this.maxTokens = maxTokens;
        this.temperature = temperature;
        this.enableCaching = enableCaching;
        this.concurrentLimit = concurrentLimit;
    }
    
    // Default configuration
    public static FoxorConfig getDefault() {
        return new FoxorConfig(
            "Foxor AI", 
            "2.0.0", 
            2000, 
            0.7, 
            true, 
            10
        );
    }
    
    // Getters
    public String getName() { return name; }
    public String getVersion() { return version; }
    public int getMaxTokens() { return maxTokens; }
    public double getTemperature() { return temperature; }
    public boolean isEnableCaching() { return enableCaching; }
    public int getConcurrentLimit() { return concurrentLimit; }
    
    @Override
    public String toString() {
        return String.format("FoxorConfig{name='%s', version='%s', maxTokens=%d}", 
                            name, version, maxTokens);
    }
}

/**
 * Code Analysis Result class
 */
class CodeAnalysis {
    private List<String> issues;
    private List<String> warnings;
    private int score;
    private double complexity;
    
    public CodeAnalysis(List<String> issues, List<String> warnings, int score, double complexity) {
        this.issues = issues;
        this.warnings = warnings;
        this.score = score;
        this.complexity = complexity;
    }
    
    public List<String> getIssues() { return issues; }
    public List<String> getWarnings() { return warnings; }
    public int getScore() { return score; }
    public double getComplexity() { return complexity; }
    
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Code Analysis Report\n");
        sb.append("===================\n");
        sb.append(String.format("Score: %d/100\n", score));
        sb.append(String.format("Complexity: %.2f\n", complexity));
        
        if (!issues.isEmpty()) {
            sb.append("\nIssues:\n");
            for (String issue : issues) {
                sb.append(String.format("  - %s\n", issue));
            }
        }
        
        if (!warnings.isEmpty()) {
            sb.append("\nWarnings:\n");
            for (String warning : warnings) {
                sb.append(String.format("  - %s\n", warning));
            }
        }
        
        return sb.toString();
    }
}

/**
 * Main Foxor AI class
 */
public class FoxorAI {
    private FoxorConfig config;
    private Map<String, String> cache;
    private Instant createdAt;
    
    public FoxorAI(FoxorConfig config) {
        this.config = config;
        this.cache = new HashMap<>();
        this.createdAt = Instant.now();
    }
    
    public FoxorAI() {
        this(FoxorConfig.getDefault());
    }
    
    /**
     * Generate a response from the AI (simulated)
     */
    public String generateResponse(String prompt) {
        System.out.printf("[Foxor AI] Processing prompt: %s\n", prompt);
        
        // Simulate processing
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        String lowerPrompt = prompt.toLowerCase();
        
        if (lowerPrompt.contains("hello") || lowerPrompt.contains("hi")) {
            return String.format("Hello! I'm %s v%s, an advanced AI assistant.", 
                               config.getName(), config.getVersion());
        } else if (lowerPrompt.contains("code") || lowerPrompt.contains("java")) {
            return "Here's some Java code for you:\n\n" +
                   "public class HelloWorld {\n" +
                   "    public static void main(String[] args) {\n" +
                   "        System.out.println(\"Hello from Foxor AI!\");\n" +
                   "    }\n" +
                   "}\n\n" +
                   "This demonstrates basic Java syntax.";
        } else {
            return String.format("I received your prompt: %s", prompt);
        }
    }
    
    /**
     * Analyze Java code for quality and issues
     */
    public CodeAnalysis analyzeCode(String code) {
        List<String> issues = new ArrayList<>();
        List<String> warnings = new ArrayList<>();
        int score = 100;
        double complexity = 0.0;
        
        // Check for common issues
        if (!code.contains("public class") && !code.contains("class ")) {
            issues.add("No class declaration found");
            score -= 20;
        }
        
        if (!code.contains("public static void main") && !code.contains("main")) {
            warnings.add("No main method found - may not be executable");
            score -= 10;
        }
        
        // Check for proper exception handling
        if (code.contains("new FileInputStream") && !code.contains("try")) {
            issues.add("File operation without try-catch block");
            score -= 15;
        }
        
        // Count lines for complexity
        String[] lines = code.split("\n");
        int lineCount = lines.length;
        complexity = Math.min(1.0, lineCount / 100.0);
        
        if (lineCount > 500) {
            warnings.add("File is very long - consider splitting");
        }
        
        // Check for Java 8+ features
        if (!code.contains("->") && !code.contains("::") && lineCount > 50) {
            warnings.add("Consider using Java 8+ features (lambdas, method references)");
        }
        
        return new CodeAnalysis(issues, warnings, score, complexity);
    }
    
    /**
     * Generate Java code from a description
     */
    public String generateJavaCode(String description) {
        String lowerDesc = description.toLowerCase();
        
        if (lowerDesc.contains("hello world")) {
            return "public class HelloWorld {\n" +
                   "    public static void main(String[] args) {\n" +
                   "        System.out.println(\"Hello, World!\");\n" +
                   "    }\n" +
                   "}";
        } else if (lowerDesc.contains("class") || lowerDesc.contains("structure")) {
            return "public class Person {\n" +
                   "    private String name;\n" +
                   "    private int age;\n\n" +
                   "    public Person(String name, int age) {\n" +
                   "        this.name = name;\n" +
                   "        this.age = age;\n" +
                   "    }\n\n" +
                   "    public String getName() { return name; }\n" +
                   "    public int getAge() { return age; }\n\n" +
                   "    public void greet() {\n" +
                   "        System.out.println(\"Hello, \" + name + \"!\");\n" +
                   "    }\n\n" +
                   "    public static void main(String[] args) {\n" +
                   "        Person person = new Person(\"Alice\", 30);\n" +
                   "        person.greet();\n" +
                   "    }\n" +
                   "}";
        } else if (lowerDesc.contains("interface")) {
            return "interface Greetable {\n" +
                   "    void greet();\n" +
                   "}\n\n" +
                   "class Dog implements Greetable {\n" +
                   "    private String name;\n\n" +
                   "    public Dog(String name) {\n" +
                   "        this.name = name;\n" +
                   "    }\n\n" +
                   "    @Override\n" +
                   "    public void greet() {\n" +
                   "        System.out.println(\"Woof! I'm \" + name + \"!\");\n" +
                   "    }\n" +
                   "}\n\n" +
                   "public class Main {\n" +
                   "    public static void main(String[] args) {\n" +
                   "        Greetable dog = new Dog(\"Rusty\");\n" +
                   "        dog.greet();\n" +
                   "    }\n" +
                   "}";
        } else if (lowerDesc.contains("stream") || lowerDesc.contains("functional")) {
            return "import java.util.*;\n" +
                   "import java.util.stream.*;\n\n" +
                   "public class StreamExample {\n" +
                   "    public static void main(String[] args) {\n" +
                   "        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n\n" +
                   "        // Filter and map using streams\n" +
                   "        List<String> upperNames = names.stream()\n" +
                   "            .filter(name -> name.length() > 3)\n" +
                   "            .map(String::toUpperCase)\n" +
                   "            .collect(Collectors.toList());\n\n" +
                   "        upperNames.forEach(System.out::println);\n" +
                   "    }\n" +
                   "}";
        } else if (lowerDesc.contains("thread") || lowerDesc.contains("concurrent")) {
            return "public class ThreadExample {\n" +
                   "    public static void main(String[] args) {\n" +
                   "        // Create and start multiple threads\n" +
                   "        for (int i = 1; i <= 5; i++) {\n" +
                   "            final int id = i;\n" +
                   "            new Thread(() -> {\n" +
                   "                System.out.println(\"Thread \" + id + \" running\");\n" +
                   "                try {\n" +
                   "                    Thread.sleep(1000);\n" +
                   "                } catch (InterruptedException e) {\n" +
                   "                    Thread.currentThread().interrupt();\n" +
                   "                }\n" +
                   "                System.out.println(\"Thread \" + id + \" done\");\n" +
                   "            }).start();\n" +
                   "        }\n\n" +
                   "        // Wait for all threads to complete\n" +
                   "        try {\n" +
                   "            Thread.sleep(2000);\n" +
                   "        } catch (InterruptedException e) {\n" +
                   "            Thread.currentThread().interrupt();\n" +
                   "        }\n" +
                   "    }\n" +
                   "}";
        } else {
            return "// TODO: Implement " + description + "\n" +
                   "public class Main {\n" +
                   "    public static void main(String[] args) {\n" +
                   "        // Your code here\n" +
                   "        System.out.println(\"Generated by Foxor AI\");\n" +
                   "    }\n" +
                   "}";
        }
    }
    
    /**
     * Get uptime duration
     */
    public Duration getUptime() {
        return Duration.between(createdAt, Instant.now());
    }
    
    /**
     * Clear the internal cache
     */
    public void clearCache() {
        cache.clear();
        System.out.println("Cache cleared");
    }
    
    /**
     * Process multiple prompts concurrently using Java streams
     */
    public List<String> processConcurrently(List<String> prompts) {
        return prompts.parallelStream()
            .map(this::generateResponse)
            .collect(Collectors.toList());
    }
}

/**
 * Main class to demonstrate Foxor AI usage
 */
public class java_example {
    public static void main(String[] args) {
        System.out.println("======================================");
        System.out.println("Foxor AI - Java Example");
        System.out.println("======================================");
        System.out.println();
        
        // Create FoxorAI instance
        FoxorAI foxor = new FoxorAI();
        
        // Example 1: Generate a response
        String response = foxor.generateResponse("hello");
        System.out.println("Response: " + response);
        System.out.println();
        
        // Example 2: Generate Java code
        String javaCode = foxor.generateJavaCode("class");
        System.out.println("Generated Java Code:");
        System.out.println(javaCode);
        System.out.println();
        
        // Example 3: Analyze code
        CodeAnalysis analysis = foxor.analyzeCode(javaCode);
        System.out.println("Code Analysis:");
        System.out.println(analysis);
        
        // Example 4: Show uptime
        System.out.println("Foxor AI Uptime: " + foxor.getUptime());
        System.out.println();
        
        // Example 5: Concurrent processing
        List<String> prompts = Arrays.asList(
            "hello",
            "tell me about Java",
            "generate code for interface",
            "what is a stream?"
        );
        
        System.out.println("Processing prompts concurrently...");
        List<String> results = foxor.processConcurrently(prompts);
        System.out.println();
        
        for (int i = 0; i < results.size(); i++) {
            System.out.println("Result " + (i + 1) + ": " + results.get(i));
            System.out.println();
        }
        
        // Example 6: More code generation
        String streamCode = foxor.generateJavaCode("stream");
        System.out.println("Generated Stream Example:");
        System.out.println(streamCode);
        
        System.out.println();
        System.out.println("======================================");
        System.out.println("Foxor AI - Powered by Java");
        System.out.println("======================================");
    }
}
