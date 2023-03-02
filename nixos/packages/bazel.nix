{ nixpkgs, environment, pkgs, ... }:
{
  environment.systemPackages = with pkgs; [
    bazel_6
    bazelisk
  ];
}
