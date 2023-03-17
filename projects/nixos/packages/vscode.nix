{ nixpkgs, environment, pkgs, ... }:
{
  # Allow unfree packages
  nixpkgs.config.allowUnfree = true;

  environment.systemPackages = with pkgs; [
    git
    (vscode-with-extensions.override {
      vscode = vscode.fhs;
      vscodeExtensions = with vscode-extensions; [
        bbenoist.nix
        ms-python.python
        ms-azuretools.vscode-docker
        ms-vscode-remote.remote-ssh
        vscjava.vscode-java-debug
        vscodevim.vim
        github.vscode-pull-request-github
        editorconfig.editorconfig
        tamasfe.even-better-toml
        vadimcn.vscode-lldb
        github.copilot
        redhat.java
      ] ++ pkgs.vscode-utils.extensionsFromVscodeMarketplace [
        # General tooling
        {
          name = "vscodeintellicode";
          publisher = "VisualStudioExptTeam";
          version = "1.2.30";
          sha256 = "f2Gn+W0QHN8jD5aCG+P93Y+JDr/vs2ldGL7uQwBK4lE=";
        }
        {
          name = "remote-containers";
          publisher = "ms-vscode-remote";
          version = "0.283.0";
          sha256 = "LaZzDLfQHFaOnkvKzq0vmUvAi+Q6sJrJPlAhWX0fY40=";
        }
        # Rust tooling
        {
          name = "rust-analyzer";
          publisher = "rust-lang";
          version = "0.4.1416";
          sha256 = "sha256-wZryB8/2n6Yk7XIWbNjr4Mjqr4QL8VuiOQ7bOqVbahE=";
        }
        # JS tooling
        {
          name = "js-debug";
          publisher = "ms-vscode";
          version = "1.76.0";
          sha256 = "ZAUUYbTq7iqBHwj+REXIb+osh1sxxYOP9hPyOCEinFA=";
        }
        # Build tooling
        {
          name = "vscode-bazel";
          publisher = "BazelBuild";
          version = "0.7.0";
          sha256 = "fdadf830cb07cbbce61ab540b633162a6ba5c12fa58a9dc9d58ba090008c9b17";
        }
      ];
    })
  ];
}
