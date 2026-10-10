#!/usr/bin/env python3
"""
Foxor AI Python Example
A simple Python script demonstrating web scraping and data processing
"""

import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime


def fetch_website(url: str) -> str:
    """Fetch HTML content from a website"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return ""


def extract_links(html: str, base_url: str) -> list:
    """Extract all links from HTML content"""
    soup = BeautifulSoup(html, 'html.parser')
    links = []
    
    for a_tag in soup.find_all('a', href=True):
        href = a_tag['href']
        if href.startswith('http'):
            links.append(href)
        elif href.startswith('/'):
            links.append(f"{base_url.rstrip('/')}{href}")
    
    return links


def analyze_text(text: str) -> dict:
    """Analyze text and return statistics"""
    words = text.split()
    lines = text.split('\n')
    
    return {
        'total_chars': len(text),
        'total_words': len(words),
        'total_lines': len(lines),
        'avg_word_length': sum(len(w) for w in words) / len(words) if words else 0
    }


def main():
    """Main function demonstrating Foxor AI capabilities"""
    print("=" * 60)
    print("Foxor AI - Python Code Example")
    print("=" * 60)
    
    # Example 1: Fetch and parse a webpage
    url = "https://foxphantom203.github.io/"
    print(f"\nFetching: {url}")
    html = fetch_website(url)
    
    if html:
        links = extract_links(html, url)
        print(f"Found {len(links)} links on the page")
        
        # Example 2: Text analysis
        text = "Foxor AI is an advanced open-source assistant with enhanced features for developers and creators."
        stats = analyze_text(text)
        print(f"\nText Analysis:")
        print(f"  Characters: {stats['total_chars']}")
        print(f"  Words: {stats['total_words']}")
        print(f"  Average word length: {stats['avg_word_length']:.2f}")
    
    # Example 3: Generate a simple report
    report = {
        'timestamp': datetime.now().isoformat(),
        'status': 'success',
        'features': [
            'Web scraping',
            'Text analysis',
            'Code generation',
            'AI assistance',
            'Multi-language support'
        ]
    }
    
    print(f"\nGenerated Report:")
    print(json.dumps(report, indent=2))
    
    print("\n" + "=" * 60)
    print("Foxor AI - Powered by Open Source")
    print("=" * 60)


if __name__ == "__main__":
    main()
