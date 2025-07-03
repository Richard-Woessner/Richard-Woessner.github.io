# frozen_string_literal: true

source "https://rubygems.org"


gem "jekyll", "~> 4.4"
gem "jekyll-sitemap"
gem "jekyll-paginate"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# ——— dev / test only ——–—
group :development, :test do
  gem "rake",       "~> 13"    # only for Rake tasks
  gem "thor"                    # only if you call Thor tasks locally
  gem "appraisal"               # only for your CI matrix
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
  
gemspec

