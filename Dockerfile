#Version must match with image pulled bellow
FROM sbtscala/scala-sbt:eclipse-temurin-jammy-22_36_1.10.0_3.4.2 AS builder

# Set working directory
WORKDIR /app


RUN apt-get update && apt-get install -y curl gnupg2


RUN curl -sL https://dlcdn.apache.org/sbt/debian/sbt-1.7.3.deb -o sbt.deb

# Install sbt using dpkg and resolve missing dependencies
RUN dpkg -i sbt.deb || apt-get install -f -y

# Copy build configuration, project files, and dependencies
COPY build.sbt /app/
COPY project /app/project
COPY lib /app/lib

# Download and cache dependencies
RUN sbt update

# Copy the application code
COPY . /app

# Ensure the SavedGame folder exists for Json maagic
RUN mkdir -p /app/SavedGame

# Build and stage the application
RUN sbt stage

# Lightweight image for actual run, Version must match with im above
FROM openjdk:22-jdk-slim

# Set working directory for the app
WORKDIR /app

# Copy the staged application from the builder image
COPY --from=builder /app/target/universal/stage /app
COPY --from=builder /app/SavedGame /app/SavedGame

# Expose the default Play port
EXPOSE 9000

# Set the command to run the application
CMD ["bin/pokeweb", "-Dhttp.port=9000"]
