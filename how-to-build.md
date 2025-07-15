# How to Build and View This Site

This guide will walk you through setting up and running Woessner's Blog locally on your machine. This site is built with Jekyll and uses the Beautiful Jekyll theme.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

### 1. Ruby
Jekyll is built with Ruby, so you'll need Ruby installed on your system.

**On macOS:**
```bash
# Install Ruby using Homebrew (recommended)
brew install ruby

# Or use rbenv for better Ruby version management
brew install rbenv
rbenv install 3.1.0
rbenv global 3.1.0
```

**On Linux:**
```bash
# Ubuntu/Debian
sudo apt-get install ruby-dev

# CentOS/RHEL
sudo yum install ruby-devel
```

**On Windows:**
Download and install Ruby from [RubyInstaller](https://rubyinstaller.org/)

### 2. Bundler
Bundler manages Ruby gem dependencies:
```bash
gem install bundler
```

### 3. Git
Make sure Git is installed to clone and manage the repository:
```bash
# macOS
brew install git

# Ubuntu/Debian
sudo apt-get install git

# Windows - download from git-scm.com
```

## Initial Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Richard-Woessner/Richard-Woessner.github.io.git
cd Richard-Woessner.github.io
```

### 2. Install Dependencies
Install all the required Ruby gems:
```bash
bundle install
```

This command reads the `Gemfile` and installs:
- Jekyll (~> 4.4)
- jekyll-sitemap
- jekyll-paginate
- And other development dependencies

## Building and Running the Site

### Development Server
To run the site locally with live reload:
```bash
bundle exec jekyll serve
```

Optional flags you can use:
- `--drafts` - Include draft posts
- `--livereload` - Automatically refresh browser on changes
- `--port 4001` - Use a different port (default is 4000)
- `--host 0.0.0.0` - Make accessible from other devices on network

Full command with common options:
```bash
bundle exec jekyll serve --drafts --livereload --port 4000
```

### Build for Production
To build the site for production deployment:
```bash
bundle exec jekyll build
```

This creates a `_site` directory with the generated static files.

### Clean Build
To clean the build directory and rebuild:
```bash
bundle exec jekyll clean
bundle exec jekyll build
```

## Viewing the Site

Once the development server is running, you can view the site at:
- **Local URL:** http://localhost:4000
- **Network URL:** http://[your-ip]:4000 (if using --host 0.0.0.0)

## Site Structure

Here's what the main directories contain:

- `_posts/` - Blog post markdown files
- `_layouts/` - HTML templates for different page types
- `_includes/` - Reusable HTML components
- `_data/` - YAML data files
- `_site/` - Generated static site (ignored by git)
- `assets/` - CSS, JS, and image files
- `_config.yml` - Site configuration

## Configuration

The main configuration is in `_config.yml`. Key settings include:

### Site Information
```yaml
title: Woessner's Blog
author: Richard Woessner III
url-pretty: "Blog.Woessner.us"
```

### Theme Colors
The site uses a dark theme with custom colors:
```yaml
page-col: "#181a1b"
text-col: "#e8e6e3"
link-col: "#4ea1f7"
# ... and more
```

### Navigation
```yaml
navbar-links:
  About Me: "aboutme"
  Resources:
    - Learn markdown: "https://www.markdowntutorial.com/"
  Author's home: "https://blog.woessner.us"
  Author's Portfolio: "https://woessner.us"
```

## Adding Content

### Creating a New Blog Post
1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-title.md`
2. Add YAML front matter:
```yaml
---
title: "Your Post Title"
subtitle: "Optional subtitle"
tags: [tag1, tag2, tag3]
---
```
3. Write your content in Markdown below the front matter

### Creating a New Page
1. Create a new `.md` file in the root directory
2. Add YAML front matter:
```yaml
---
title: "Page Title"
---
```
3. Write your content in Markdown

## Troubleshooting

### Common Issues

**Bundle install fails:**
```bash
# Try updating bundler
gem update bundler
bundle install
```

**Jekyll serve fails:**
```bash
# Clear cache and try again
bundle exec jekyll clean
bundle exec jekyll serve
```

**Ruby version conflicts:**
```bash
# Check Ruby version
ruby --version

# If using rbenv
rbenv versions
rbenv local 3.1.0
```

### Port Already in Use
If port 4000 is already in use:
```bash
bundle exec jekyll serve --port 4001
```

### Permission Issues on macOS
If you encounter permission issues:
```bash
# Use rbenv instead of system Ruby
brew install rbenv
rbenv install 3.1.0
rbenv global 3.1.0
```

## Deployment

### GitHub Pages (Automatic)
This site is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment
1. Build the site: `bundle exec jekyll build`
2. Upload the contents of `_site/` to your web server

## Development Tips

### Live Reloading
Use `--livereload` flag to automatically refresh your browser when files change:
```bash
bundle exec jekyll serve --livereload
```

### Working with Drafts
Create draft posts in `_drafts/` directory and use `--drafts` flag to preview them:
```bash
bundle exec jekyll serve --drafts
```

### Checking for Errors
Jekyll will show build errors in the terminal. Common issues:
- YAML front matter syntax errors
- Liquid template syntax errors
- Missing files or broken links

## Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Beautiful Jekyll Theme](https://beautifuljekyll.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

## Support

For issues specific to this site, check the repository's issues page or create a new issue.

For Jekyll-related questions, refer to the [Jekyll documentation](https://jekyllrb.com/docs/) or [Jekyll community](https://talk.jekyllrb.com/).