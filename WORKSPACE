
# Load http_archive rule
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Load HUGO

RULES_HUGO_COMMIT = "294a8ec626a394011d35397108c930be631ab9fa"
RULES_HUGO_SHA256 = "8df370f374dc72701b65b7c8a8add8ccb8423a845e973993fa9c68f8b516c9be"

http_archive(
    name = "build_stack_rules_hugo",
    url = "https://github.com/stackb/rules_hugo/archive/%s.zip" % RULES_HUGO_COMMIT,
    sha256 = RULES_HUGO_SHA256,
    strip_prefix = "rules_hugo-%s" % RULES_HUGO_COMMIT
)

load("@build_stack_rules_hugo//hugo:rules.bzl", "hugo_repository", "hugo_theme")

hugo_repository(
    name = "hugo",
)
