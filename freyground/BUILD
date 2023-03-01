load("@build_stack_rules_hugo//hugo:rules.bzl", "hugo_site", "hugo_theme", "hugo_serve")


# Note, here we are using the config_dir attribute to support multi-lingual configurations.
hugo_site(
    name = "site_complex",
    config = "config.toml",
    content = glob(["content/**"]),
    data = glob(["data/**"]),
    layouts = glob(["layouts/**"]),
    quiet = False,
    theme = "//freyground/themes/pimeja:fgtheme",
)

# Run local development server
hugo_serve(
    name = "serve",
    dep = [":site_complex"],
)
