{ nixpkgs, environment, pkgs, ... }:
{
  environment.systemPackages = with pkgs; [
    bazel-buildtools
  ];
}
