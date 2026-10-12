package com.loopmart.backend.service;

import com.loopmart.backend.entity.Product;
import com.loopmart.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // CREATE
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    // READ - Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // READ - Get product by ID
    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    // UPDATE
    public Product updateProduct(Long id, Product updatedProduct) {

        Optional<Product> existingProduct =
                productRepository.findById(id);

        if (existingProduct.isPresent()) {

            Product product = existingProduct.get();

            product.setName(updatedProduct.getName());
            product.setCategory(updatedProduct.getCategory());
            product.setPrice(updatedProduct.getPrice());
            product.setLocation(updatedProduct.getLocation());
            product.setConditionStatus(updatedProduct.getConditionStatus());
            product.setRating(updatedProduct.getRating());
            product.setSeller(updatedProduct.getSeller());
            product.setStatus(updatedProduct.getStatus());

            return productRepository.save(product);
        }

        return null;
    }

    // DELETE
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}