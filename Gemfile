source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "jekyll", "~> 3.6.0"
gem "github-pages",
  github: 'UnderpantsGnome/pages-gem@127c31b',
  branch: "paginate-v2",
  group: :jekyll_plugins
